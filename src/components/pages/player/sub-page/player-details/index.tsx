'use client';
import Box from '@/components/ui/box';
import TCard from '@/components/ui/tcard';
import Text from '@/components/ui/text';
import Back from '@/iconejs/back';
import React from 'react'
import Content from '../../components/content';

const PlayerDetailsPage = () => {
  return (
    <TCard className='py-6 '>
        <Box className='flex items-center gap-1'>
                <Back/>
                <Text className='text-base'> Back</Text>
        </Box>
        <Text className='text-lg font-bold py-6'>
            Player Details
        </Text>
        <Content/>
    </TCard>
  )
}

export default PlayerDetailsPage
