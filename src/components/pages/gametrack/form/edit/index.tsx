'use client';
import React from 'react';
import Grid from '@/components/layout/Grid';
import Button from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { Icons } from '@/components/ui/images/Icons';
import Select from '@/components/ui/inputs/Select';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@/components/ui/inputs/TextField';
import { CREATEGAMETRACK_SCHEMA } from './schema';

type FiledValues = {
  operatorname: string;
  url: string;
  username: string;
  password: string;
  merchantcode: string;
};

export const EditGameTrackForm = () => {
  const form = useForm({
    resolver: zodResolver(CREATEGAMETRACK_SCHEMA),
  });

  const {
    formState: { errors, isValid },
  } = form;

  const handleCreateGameTrackForm: SubmitHandler<any> = (e) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateGameTrackForm)}>
        <Stack rowGap={3} mt={4}>
          <FormField
            control={form.control}
            name="operatorname"
            defaultValue=""
            render={({ field }) => {
              return <TextField label="Operator Name" {...field} />;
            }}
          />
          <FormField
            name="url"
            control={form.control}
            render={({ field }) => <TextField label="URL" {...field} />}
          />

          <Stack direction="row" gap={2} justifyContent="space-between">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => <TextField label="Username" {...field} />}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => <TextField label="Password" password {...field} />}
            />
          </Stack>

          <Grid>
            <FormField
              name="username"
              control={form.control}
              render={() => (
                <Select
                  className="w-full"
                  onChange={() => {}}
                  options={[
                    { label: 'One', value: 1 },
                    { label: 'Two', value: 2 },
                    { label: 'Three', value: 3 },
                  ]}
                />
              )}
            />
            <FormField
              name="merchantcode"
              control={form.control}
              render={({ field }) => <TextField label="Merchant Code" {...field} />}
            />
            <FormField
              name="vpn"
              control={form.control}
              render={() => (
                <Select
                  className="w-full"
                  onChange={() => {}}
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                />
              )}
            />
          </Grid>

          <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
            <Link href="/game-track-panel">
              <Button
                variant="contained"
                className="bg-gray normal-case text-black hover:bg-gray"
                disableElevation
              >
                Cancel
              </Button>
            </Link>

            <Button
              type="submit"
              variant="contained"
              className="bg-green normal-case disabled:bg-green/65 disabled:text-white"
              disabled={!isValid}
            >
              <Icons.check_mark className="mr-2 text-lg" /> Create
            </Button>
          </Stack>
        </Stack>
      </form>
    </Form>
  );
};
