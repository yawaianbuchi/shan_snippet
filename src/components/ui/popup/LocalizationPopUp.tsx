'use client';
import Card from '@/components/shared/card';
import { Box } from '@mui/material';
import React from 'react';
import useChangeLng from '@/hooks/useChangeLng';
import { Icons } from '../images/Icons';
import Text from '../typo';
import Image from '../images/Image';
import Button from '../button';
import { ToggleState, useToggle } from '@/hooks/useToggle';
import PopUp from '@/components/shared/popup';

const LOCALIZATION = [
  { label: 'English', value: 'en', img: '/images/flag/br.svg' },
  { label: 'Chinese', value: 'zh', img: '/images/flag/chn.svg' },
  { label: 'Myanmar', value: 'my', img: '/images/flag/mm.svg' },
  { label: 'ရှမ်း', value: 'sh', img: '/images/flag/shan.svg' },
];

const LocalizationPopUp = () => {
  const [value, { toggle }] = useToggle(false) as [boolean, ToggleState];
  const { handleSelect, currentLocale } = useChangeLng();

  const checkCurrentLocale = LOCALIZATION.find((item) => item.value === currentLocale);
  const renderRows = () => {
    return LOCALIZATION.map((item) => {
      return (
        <Button
          key={item.value}
          onClick={() => handleSelect(item)}
          className="w-full border-none text-black normal-case hover:border-none"
          variant="outlined"
        >
          <Box flexGrow={1} className="flex items-center gap-2">
            <Image src={item.img} alt="british_flag" width={20} height={20} />
            <Text>{item.label}</Text>
          </Box>
          {currentLocale === item.value && (
            <Icons.check_mark_one className="text-lg font-semibold" />
          )}
        </Button>
      );
    });
  };

  return (
    <Box className="relative w-[160px] h-12">
      <Card>
        <button
          onClick={toggle}
          className="w-full border-none flex items-center justify-center gap-2 text-black normal-case hover:border-none p-0"
        >
          <Image
            src={checkCurrentLocale?.img ?? '/images/flag/br.svg'}
            alt="british_flag"
            width={20}
            height={20}
          />
          <Text>{checkCurrentLocale?.label ?? 'English'} </Text>
        </button>
      </Card>

      <PopUp status={value}>{renderRows()}</PopUp>
    </Box>
  );
};

export default LocalizationPopUp;
