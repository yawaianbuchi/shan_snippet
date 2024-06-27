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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const [activeFlag, setActiveFlag] = useState('en');

  const form = useForm({
    resolver: zodResolver(CreateLoginSchema),
  });

  const {
    formState: { errors, isValid },
    reset,
  } = form;

  const handleCreateGameTrackForm: SubmitHandler<any> = (e) => {
    setIsLoading(true);

    startTransition(async () => {
      await triggerSessionLogin({ ...{}, tokenExpired: 1 });
      setIsLoading(false);

      router.push(`/${currentLocale}`);

      reset();
    });
  };
  return (
    <div className="h-screen w-screen bg-[url('/images/auth-bg.svg')] bg-cover bg-center bg-no-repeat">
      <Image
        objectFit="cover"
        src="/images/auth-dashboard-bg.svg"
        alt="auth-dashboard-bg"
        width={0}
        height={0}
        className="absolute top-1/2 -translate-y-1/2 md:right-[20%] lg:right-[20%] lg:w-[54rem] 2xl:right-[28%] 2xl:w-[60rem]"
      />

      <div className="absolute right-1/2 top-1/2 z-10 mx-auto flex h-[80vh] w-[80%] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-xl bg-white py-5 shadow-lg lg:right-0 lg:top-0 lg:w-[35%] xl:h-screen xl:translate-x-0 xl:translate-y-0 xl:rounded-none xl:py-0">
        <div className="-mt-20">
          <Image src="/images/logo.svg" alt="logo" width={100} height={100} className="mx-auto" />
          <p className="mb-2 mt-4 text-center font-bold text-green">Shan Gaming</p>
          <p className="text-center text-sm font-bold text-black">Admin Back-office System</p>

          <Form {...form}>
            <form className="gap-u-5" onSubmit={form.handleSubmit(handleCreateGameTrackForm)}>
              <div className="mt-10 grid w-[17rem] gap-y-2 xl:w-[25rem]">
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => <TextField variant="filled" label="Username" {...field} />}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <TextField
                      password
                      variant="filled"
                      label="Password"
                      type="password"
                      {...field}
                    />
                  )}
                />

                <Button
                  loading={isLoading}
                  type="submit"
                  variant="contained"
                  className="mt-3 bg-green text-md hover:bg-green disabled:bg-green/65 disabled:text-white"
                  disabled={!isValid || isLoading}
                >
                  {isLoading ? 'Logging In' : 'Log In'}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="absolute bottom-4 xl:bottom-10">
          <div className="flex gap-x-4 rounded-2xl border border-gray px-2 py-2">
            {flags.map((_: { label: string; value: string; image: string }, i: number) => (
              <div
                key={i}
                className={cn(
                  'grid h-[36px] w-[36px] cursor-pointer place-items-center rounded-lg border',
                  activeFlag === _?.value && 'bg-green-50'
                )}
                onClick={() => {
                  setActiveFlag(_?.value);
                }}
              >
                <Image
                  width={20}
                  height={20}
                  alt={_.image}
                  src={`/images/flag/${_.image}`}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs"> &copy; Shan Gaming.All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
