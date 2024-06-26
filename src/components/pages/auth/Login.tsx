'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
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

const Login = () => {
 
  const form = useForm({
    resolver: zodResolver(CreateLoginSchema),
  });

  const {
    formState: { errors, isValid },
  } = form;

  console.log(isValid, errors);
  const handleCreateGameTrackForm: SubmitHandler<any> = (e) => {

    console.log("GGGG",e)
    console.log(e);
  };
  return (
<div className="w-screen h-screen bg-[url('/images/auth-bg.svg')]  bg-cover bg-center bg-no-repeat">
  <Image             objectFit="cover"
 src="/images/auth-dashboard-bg.svg" alt="auth-dashboard-bg" width={0} height={0} className=' lg:w-[54rem] 2xl:w-[60rem] absolute top-1/2 -translate-y-1/2  md:right-[20%] lg:right-[20%] 2xl:right-[28%]'/>

  <div className='w-[80%]  mx-auto lg:w-[35%] top-1/2 -translate-y-1/2 xl:translate-y-0  rounded-xl xl:rounded-none py-10 xl:py-0 shadow-lg bg-white xl:h-screen z-10 absolute right-1/2 translate-x-1/2 xl:translate-x-0 lg:top-0 lg:right-0 flex justify-center items-center'>


    <div>


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
              render={({ field }) => <TextField variant="filled" label="Password" type="password" {...field} />}
            />

                 <Button
              type="submit"
              variant="contained"
              className="bg-green mt-3 disabled:bg-green/65 disabled:text-white text-md hover:bg-green"
              disabled={!isValid}
            > Log In
            </Button>

        </div>

      </form>
    </Form>
    </div>



  </div>
</div>
  );
};

export default Login;
