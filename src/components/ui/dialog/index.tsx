'use client';
import * as React from 'react';
import { DialogContent, DialogProps, Dialog as MDialog } from '@mui/material';
import { Icons } from '../images/Icons';

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
          <div className={`absolute cursor-pointer top-5 right-5 text-2xl`} onClick={() => setOpen(false)}>
            <Icons.times />
          </div>
        )}
        <DialogContent>
        {rest.children}
        </DialogContent>
      </MDialog>
    </React.Fragment>
  );
};

export default Dialog;
