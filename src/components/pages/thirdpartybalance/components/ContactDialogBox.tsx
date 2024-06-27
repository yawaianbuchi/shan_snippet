'use client';
import Card from '@/components/shared/card';
import Dialog from '@/components/ui/dialog';
import { Icons } from '@/components/ui/images/Icons';
import Image from '@/components/ui/images/Image';
import Text from '@/components/ui/typo';
import { ToggleState, useToggle } from '@/hooks/useToggle';
import { Box, Stack } from '@mui/material';
import React from 'react';

const ContactDialogBox = () => {
  const [show, { toggle }] = useToggle(false) as [boolean, ToggleState];
  return (
    <>
      <button onClick={toggle} className="h-fit w-fit">
        <Icons.messageInfo className="text-2xl" />
      </button>
      <Dialog open={show} setOpen={toggle} closeIcon>
        <Text variant="h6" fontWeight="500">
          Contact Information
        </Text>

        <Stack mt={3} gap={2}>
          <SocialLink type="facebook" value="www.facebook.com" />
          <SocialLink type="telegram" value="www.telegram.com" />
          <SocialLink type="wechat" value="www.wechat.com" />
          <SocialLink type="phone" value="+959 345 345 345" />
        </Stack>
      </Dialog>
    </>
  );
};

type SocialLinkProps = {
  type: 'facebook' | 'telegram' | 'wechat' | 'phone';
  value: string;
};

const SocialLink = ({ type, value }: SocialLinkProps) => {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      <Image
        src={`/images/social/${type}.png`}
        alt={type}
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <Box flexGrow={1}>
        <Text className="text-gray-secondary text-sm capitalize leading-6">
          {type === 'phone' ? type : `${type} Link`}
        </Text>
        <Box className="flex gap-4">
          {type === 'phone' && (
            <Image src="/images/flag/mm.svg" alt="nation_flag" width={20} height={20} />
          )}
          <a href="https://www.facebook.com/">{value}</a>
        </Box>
      </Box>

      <button>
        <Icons.arrow_long className="rotate-180 text-2xl" />
      </button>
    </Stack>
  );
};

export default ContactDialogBox;
