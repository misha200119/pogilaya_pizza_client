import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField,
} from '@mui/material';
import React, { FC, memo } from 'react';
import IOrder from '../../../../utils/models/order/IOrder';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleDelete: () => void;
  handleSave: (newOrder: IOrder) => void;
}

export const EditOrderDialog: FC<Props> = memo(({
  isOpen,
  handleClose,
  handleSave,
  handleDelete,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={() => handleSave({} as IOrder)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
});
