import GenieTable from '@/components/ui/genie-table';
import { Icons } from '@/components/ui/images/Icons';
import useGenieTable from '@/hooks/useGenieTable';
import { Button, IconButton, Stack } from '@mui/material';
import Dialog from '@/components/ui/dialog';
import React, { useEffect, useState } from 'react';
import Text from '@/components/ui/typo';
import { FormProvider, useForm } from 'react-hook-form';
import { CusInput } from './SpinComponents';
import { FormField } from '@/components/ui/form';
import TextField from '@/components/ui/inputs/TextField';

const dataItem = { id: 1, rewardAmt: 100, maxCount: 10 };
const data: (typeof dataItem)[] = new Array(15).fill(0).map((_, idx) => ({
  id: dataItem.id + idx,
  rewardAmt: dataItem.rewardAmt + idx,
  maxCount: dataItem.maxCount + idx,
}));
type renderType = ReturnType<typeof hello>;
const hello = () => data[0];

interface IEditTable {
  newreward: boolean;
  setNewReward: (value: React.SetStateAction<boolean>) => void;
}

function EditTable({ newreward, setNewReward }: IEditTable) {
  const methods = useForm();
  const { value = [], controls } = useGenieTable({
    total: data.length,
    api: false,
    data,
  });
  const [open, setOpen] = useState({
    type: 'edit',
    val: false,
  });

  useEffect(() => {
    newreward && setOpen({ type: 'new', val: true });
  }, [newreward]);

  const delForm = (
    <>
      <Text className="my-4 text-xl font-bold">Are you sure to delete?</Text>
      <Text className="my-4">
        Are you sure you want to delete this value and chance? This action cannot be undone.
      </Text>
      <Stack direction={'row'} justifyContent={'end'}>
        <Button
          className="mr-3 mt-4 w-fit bg-gray-100 font-bold capitalize text-gray-600 hover:bg-gray-100"
          type="button"
          onClick={() => setOpen({ type: 'del', val: false })}
        >
          Cancel
        </Button>
        <Button
          className="mt-4 w-fit bg-red font-bold capitalize text-white hover:bg-red"
          startIcon={<Icons.trash style={{ color: 'white' }} />}
          type="button"
        >
          Delete
        </Button>
      </Stack>
    </>
  );

  const newForm = (
    <>
      <Text className="my-4 text-xl font-bold">New Reward</Text>
      <Stack gap={4}>
        <FormField
          control={methods.control}
          name="orderno"
          defaultValue="5"
          render={({ field }) => {
            return <TextField variant="filled" label="Order No" {...field} />;
          }}
        />
        <FormField
          control={methods.control}
          name="rewardamt"
          render={({ field }) => {
            return <TextField variant="filled" label="Reward Amount(Text or Number)" {...field} />;
          }}
        />
        <FormField
          control={methods.control}
          name="maxcount"
          render={({ field }) => {
            return <TextField variant="filled" label="Maximum Count" {...field} />;
          }}
        />
      </Stack>
      <Stack direction={'row'} justifyContent={'end'}>
        <Button
          className="mr-3 mt-4 w-fit bg-gray-100 font-bold capitalize text-gray-600 hover:bg-gray-100"
          type="button"
          onClick={() => {
            setOpen({ type: 'new', val: false });
            setNewReward(false);
          }}
        >
          Cancel
        </Button>
        <Button
          className="mt-4 w-fit bg-green-50 font-bold capitalize text-green hover:bg-green-50"
          startIcon={<Icons.check_mark style={{ color: 'green' }} />}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </>
  );

  const editForm = (
    <>
      <Text className="my-4 text-xl font-bold">Edit Reward</Text>
      <Stack gap={4}>
        <FormField
          control={methods.control}
          name="orderno"
          defaultValue="5"
          render={({ field }) => {
            return <TextField variant="filled" label="Order No" {...field} />;
          }}
        />
        <FormField
          control={methods.control}
          name="rewardamt"
          defaultValue="5"
          render={({ field }) => {
            return <TextField variant="filled" label="Reward Amount(Text or Number)" {...field} />;
          }}
        />
        <FormField
          control={methods.control}
          name="maxcount"
          defaultValue="5"
          render={({ field }) => {
            return <TextField variant="filled" label="Maximum Count" {...field} />;
          }}
        />
      </Stack>
      <Stack direction={'row'} justifyContent={'end'}>
        <Button
          className="mr-3 mt-4 w-fit bg-gray-100 font-bold capitalize text-gray-600 hover:bg-gray-100"
          type="button"
          onClick={() => setOpen({ type: 'edit', val: false })}
        >
          Cancel
        </Button>
        <Button
          className="mt-4 w-fit bg-green-50 font-bold capitalize text-green hover:bg-green-50"
          startIcon={<Icons.check_mark style={{ color: 'green' }} />}
          type="submit"
        >
          Update
        </Button>
      </Stack>
    </>
  );
  return (
    <>
      <GenieTable
        show="default"
        data={data}
        header={['Order No', 'Reward Amount', 'Maximum Count', 'Actions']}
        paginate
        total={data.length}
        {...controls}
      >
        <tbody>
          {value.map((item: renderType) => (
            <tr key={item.id} className="whitespace-nowrap">
              <td className="px-4">{item.id}</td>
              <td className="px-4">{item.rewardAmt}</td>
              <td className="px-4">{item.maxCount}</td>
              <td className="px-4 pt-2">
                <Button
                  className="mr-2 bg-green-50 font-bold capitalize text-green hover:bg-green-50"
                  startIcon={<Icons.penline style={{ color: 'green' }} />}
                  sx={{ borderRadius: 5 }}
                  onClick={() => setOpen({ type: 'edit', val: true })}
                >
                  Edit
                </Button>
                <Button
                  className="bg-red-50 font-bold text-red hover:bg-red-50"
                  startIcon={<Icons.trash style={{ color: 'red' }} />}
                  sx={{ borderRadius: 5 }}
                  onClick={() => setOpen({ type: 'del', val: true })}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </GenieTable>
      <Dialog open={open.val} setOpen={() => setOpen((pre) => ({ ...pre, val: false }))}>
        <div className="relative p-4">
          <IconButton
            onClick={() => setOpen((pre) => ({ ...pre, val: false }))}
            size="small"
            className="absolute right-5 top-[8%]"
          >
            <Icons.times />
          </IconButton>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((val) => {})}>
              {open.type === 'edit'
                ? editForm
                : open.type === 'del'
                  ? delForm
                  : open.type === 'new'
                    ? newForm
                    : ''}
            </form>
          </FormProvider>
        </div>
      </Dialog>
    </>
  );
}

export default EditTable;
