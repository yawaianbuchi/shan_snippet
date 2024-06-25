
import React from 'react';
import { Stack } from '@mui/material';
import { Icons } from '@/components/ui/images/Icons';
import Button from '@/components/ui/button';
import Input from '@/components/ui/inputs/Input';
import Link from 'next/link';


const GameTrackTable = () => {
  return (
    <>
       <Stack direction="row" gap={2} alignItems="center" my={2}>

        <Link href="/game-track-panel/create">
        <Button
          variant="outlined"
          className="normal-case w-fit bg-green border-none text-white
           text-[16px] h-12 rounded-lg gap-1 hover:border-none hover:bg-green/85 hover:text-white"
        >
          <Icons.plus_circle className="font-semibold text-lg" />
          Create New
        </Button>
        </Link>

        <Input
          name="game_track"
          placeholder="Search by game name or URL"
          icon={<Icons.search className="text-xl font-bold text-green" />}
          containerClass="rounded-lg"
          flexRowReverse
          className='py-3'
        />
      </Stack>
    </>
  )
}

export default GameTrackTable