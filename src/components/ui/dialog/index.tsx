'use client';
import * as React from 'react';
import { DialogProps, Dialog as MDialog } from '@mui/material';

type MDialogProps = DialogProps & React.PropsWithChildren;
interface CustomDialogProps extends MDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  closeIcon?: boolean;
}

const Dialog: React.FC<CustomDialogProps> = ({ open, setOpen, ...rest }) => {
  return (
    <React.Fragment>
      <MDialog
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        {...rest}
      >
        {rest.closeIcon && (
          <div className={`absolute right-5 top-5 cursor-pointer`} onClick={() => setOpen(false)}>
            {/* <Icons.close /> */}
            close
          </div>
        )}
        {rest.children}
      </MDialog>
    </React.Fragment>
  );
};

export default Dialog;
