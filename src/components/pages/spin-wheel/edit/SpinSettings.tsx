import CustomSwitch from '@/components/ui/customswitch';
import { Icons } from '@/components/ui/images/Icons';
import { Stack, Button } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SpinInputBox, SpinInput, CusInput, DurationSelectBox } from './SpinComponents';
import Text from '@/components/ui/typo';

function SpinSettings() {
  const [checked, setChecked] = useState(true);
  const methods = useForm();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>
        <Text className="my-4 text-xl font-bold">Spin Settings</Text>
        <Stack direction={'row'} gap={1} alignItems={'center'}>
          <CustomSwitch isOpen={checked} handleToggle={() => setChecked((pre) => !pre)} />
          <Text className={`font-semibold ${checked ? 'text-green' : 'text-red'}`}>
            {checked ? 'On' : 'Off'}
          </Text>
        </Stack>
      </Stack>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(() => {})}>
          <div className="grid grid-cols-3 gap-3">
            <SpinInputBox label="Winning Chance">
              <SpinInput
                leftEl={
                  <CusInput
                    name="winchance"
                    type="number"
                    validate={(val) => (val > 0 && val <= 100) || 'between zero and hundred only'}
                  />
                }
                rightEl={<div>%</div>}
              />
            </SpinInputBox>
            <SpinInputBox label="Spin Chances">
              <SpinInput
                leftEl={
                  <CusInput
                    name="spinchancecount"
                    type="number"
                    validate={(val) => (val > 0 && val <= 100) || 'between zero and hundred only'}
                  />
                }
                rightEl={<div>Times per</div>}
              />
              <div className="h-[1.5rem] w-[1px] bg-gray-600" />
              <SpinInput
                leftEl={
                  <CusInput
                    name="spinchanceduration"
                    type="number"
                    validate={(val) => (val > 0 && val <= 100) || 'between zero and hundred only'}
                  />
                }
                rightEl={
                  <DurationSelectBox control={methods.control} name="duration" defaultValue="hr" />
                }
              />
            </SpinInputBox>
            <SpinInputBox label="Spin Bonus Expire After">
              <SpinInput
                leftEl={
                  <CusInput
                    name="spinchance"
                    type="number"
                    validate={(val) => (val > 0 && val <= 100) || 'between zero and hundred only'}
                  />
                }
                rightEl={<div>%</div>}
              />
            </SpinInputBox>
            <div className="col-start-3 justify-self-end">
              {isEdit ? (
                <>
                  <Button
                    className="mr-3 mt-4 w-fit bg-gray-100 font-bold capitalize text-gray-600 hover:bg-gray-100"
                    type="button"
                    onClick={() => setIsEdit(false)}
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
                </>
              ) : (
                <Button
                  className="mt-4 w-fit bg-green-50 font-bold capitalize text-green hover:bg-green-50"
                  startIcon={<Icons.penline style={{ color: 'green' }} />}
                  type="button"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </Button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default SpinSettings;
