'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { startTransition, useState } from 'react';
import TextField from '@/components/ui/inputs/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@/components/ui/button';
import Link from '@mui/material/Link';
import { Form, FormField } from '@/components/ui/form';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginForm, loginSchema } from '@/types/login';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { CREATEGAMETRACK_SCHEMA, CreateLoginSchema } from '../gametrack/form/create/schema';
import { flags } from '@/data';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useSessionLogin } from '@/lib/session';

const Login = () => {
  const { trigger: triggerSessionLogin } = useSessionLogin();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [isLoading,setIsLoading] =useState<boolean>(false)

  const router=useRouter()


  const [activeFlag,setActiveFlag]=useState("en")
 
  const form = useForm({
    resolver: zodResolver(CreateLoginSchema),
  });

  const {
    formState: { errors, isValid },
    reset
  } = form;

  const handleCreateGameTrackForm: SubmitHandler<any> = (e) => {
    setIsLoading(true)

   startTransition(async()=>{

    await triggerSessionLogin({ ...{
      
    }, tokenExpired: 1 });
    setIsLoading(false)


    router.push(`/${currentLocale}`)

    reset()
   })
  };
  return (
<div className="w-screen h-screen bg-[url('/images/auth-bg.svg')]  bg-cover bg-center bg-no-repeat">
  <Image             objectFit="cover"
 src="/images/auth-dashboard-bg.svg" alt="auth-dashboard-bg" width={0} height={0} className=' lg:w-[54rem] 2xl:w-[60rem] absolute top-1/2 -translate-y-1/2  md:right-[20%] lg:right-[20%] 2xl:right-[28%]'/>

  <div className='w-[80%] h-[80vh]  mx-auto lg:w-[35%] top-1/2 -translate-y-1/2 xl:translate-y-0  rounded-xl xl:rounded-none py-5  xl:py-0 shadow-lg bg-white xl:h-screen z-10 absolute right-1/2 translate-x-1/2 xl:translate-x-0 lg:top-0 lg:right-0 flex justify-center items-center'>


    <div className='-mt-20'>


      <Image src="/images/logo.svg" alt="logo" width={100} height={100} className='mx-auto' />
      <p className='text-green font-bold text-center mb-2 mt-4'>Shan Gaming</p>
      <p className='text-center text-black text-sm font-bold'>Admin Back-office System</p>

         <Form {...form} >
      <form  className="gap-u-5" onSubmit={form.handleSubmit(handleCreateGameTrackForm)}>

        <div className='grid gap-y-2 mt-10 w-[17rem] xl:w-[25rem]'>

         <FormField
              name="username"
              control={form.control}
              render={({ field }) => <TextField variant="filled" label="Username" {...field} />}
            />
            <FormField
            
              name="password"
              control={form.control}
              render={({ field }) => <TextField 
              password
              variant="filled" label="Password" type="password" {...field}  />}
            />

                 <Button

                 loading={isLoading}
              type="submit"
              variant="contained"
              className="bg-green mt-3 disabled:bg-green/65 disabled:text-white text-md hover:bg-green"
              disabled={!isValid || isLoading}
            > 
            
            {isLoading ? "Logging In":"Log In" }
            </Button>

        </div>

      </form>
    </Form>
    </div>

      <div className='absolute bottom-4 xl:bottom-10'>

  <div className='flex border  border-gray px-2 py-2 rounded-2xl gap-x-4'>
     {
    flags.map((_:{label:string,value:string;image:string;},i:number)=>(
      <div key={i} className={cn('w-[36px] h-[36px] border grid  place-items-center rounded-lg cursor-pointer',activeFlag ===_?.value && "bg-green-50 ")} onClick={()=>{
        setActiveFlag(_?.value)
      }}>

        <Image width={20} height={20} alt={_.image} src={`/images/flag/${_.image}`}  className=' rounded-full'/>
      </div>
    ))
   }
  </div>


  <p className='mt-5 text-xs'> &copy; Shan Gaming.All Rights Reserved.</p>
  </div>



  </div>


</div>
  );
};

export default Login;
