'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import TextField from '@/components/ui/inputs/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@/components/ui/button';
import Link from '@mui/material/Link';
import { Form } from '@/components/ui/form';
import { Controller, useForm } from 'react-hook-form';
import { LoginForm, loginSchema } from '@/types/login';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

const Login = () => {
 

  return (
<div className="w-screen h-screen bg-[url('/images/auth-bg.svg')]  bg-cover bg-center bg-no-repeat">
  <Image             objectFit="cover"
 src="/images/auth-dashboard-bg.svg" alt="auth-dashboard-bg" width={990} height={900} className='absolute top-1/2 -translate-y-1/2  md:right-[20%] lg:right-[20%] 2xl:right-[28%]'/>

  <div className='w-[35%] shadow-lg bg-white h-screen z-10 absolute top-0 right-0 flex justify-center items-center'>


    <div>


      <Image src="/images/logo.svg" alt="logo" width={100} height={100} className='mx-auto' />
      <p className='text-green font-bold text-center mb-2 mt-4'>Shan Gaming</p>
      <p className='text-center text-black text-sm font-bold'>Admin Back-office System</p>

      <form>

        
      </form>
    </div>



  </div>
</div>
  );
};

export default Login;
