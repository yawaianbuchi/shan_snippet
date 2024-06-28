import Button from '@/components/ui/button';
import { Icons } from '@/components/ui/images/Icons';
import React from 'react';

export const BUTTON = [
  {
    com: (
      <Button variant="contained" className="bg-green hover:bg-green/85">
        Button
      </Button>
    ),
    val: '<Button variant="contained" className="bg-green hover:bg-green/85">Button</Button>',
  },
  {
    com: (
      <Button
        variant="contained"
        className="bg-green-50 text-green hover:bg-green/25"
        disableElevation
      >
        Button
      </Button>
    ),
    val: '<Button variant="contained"  className="bg-green-50 text-green hover:bg-green/25" disableElevation>Button</Button>',
  },
  {
    com: (
      <Button
        variant="contained"
        className="bg-green normal-case hover:bg-green/75"
        disableElevation
      >
        <Icons.check_mark className="mr-2 text-lg" /> Create
      </Button>
    ),
    val: '<Button variant="contained" className="bg-green normal-case" disableElevation> <Icons.check_mark className="mr-2 text-lg" /> Create </Button>',
  },
  {
    com: (
      <Button
        variant="contained"
        className="bg-green-50 normal-case text-green hover:bg-green/75"
        disableElevation
      >
        <Icons.check_mark className="mr-2 text-lg" /> Create
      </Button>
    ),
    val: '<Button variant="contained" className="bg-green-50 text-green normal-case" disableElevation> <Icons.check_mark className="mr-2 text-lg" /> Create </Button>',
  },
  {
    com: (
      <Button
        variant="contained"
        className="bg-gray-secondary hover:bg-gray-secondary/85"
        disableElevation
      >
        Button
      </Button>
    ),
    val: '<Button variant="contained" className="hover:bg-gray-secondary/85 bg-gray text-black"disableElevation>Button</Button>',
  },
  {
    com: (
      <Button
        variant="contained"
        className="bg-gray-secondary hover:bg-gray-secondary/85"
        disableElevation
      >
        Button
      </Button>
    ),
    val: '<Button variant="contained" className="hover:bg-gray-secondary/85 bg-gray text-black"disableElevation>Button</Button>',
  },
  {
    com: (
      <Button variant="contained" className="bg-red normal-case hover:bg-red/75" disableElevation>
        <Icons.check_mark className="mr-2 text-lg" /> Create
      </Button>
    ),
    val: '<Button variant="contained" className="bg-red normal-case " disableElevation> <Icons.check_mark className="mr-2 text-lg" /> Create </Button>',
  },
  {
    com: (
      <Button
        variant="contained"
        className="bg-red-50 normal-case text-red hover:bg-red/75"
        disableElevation
      >
        <Icons.check_mark className="mr-2 text-lg" /> Create
      </Button>
    ),
    val: '<Button variant="contained" className="bg-red-50 text-red normal-case" disableElevation> <Icons.check_mark className="mr-2 text-lg" /> Create </Button>',
  },

  {
    com: (
      <Button
        variant="contained"
        className="bg-red-50 normal-case text-red hover:bg-red/75"
        disableElevation
        disabled
      >
        <Icons.check_mark className="mr-2 text-lg" /> disabled
      </Button>
    ),
    val: '<Button variant="contained" className="bg-red-50 text-red normal-case" disableElevation> <Icons.check_mark className="mr-2 text-lg" /> disabled </Button>',
  },
];
