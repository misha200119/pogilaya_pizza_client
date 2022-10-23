/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@mui/material';
import React, { FC, memo, useState } from 'react';
import IOrder from '../../../../utils/models/order/IOrder';

interface Props {
  isOpen: boolean;
  order: IOrder;
  handleClose: () => void;
  handleDelete: () => void;
  handleSave: (newOrder: IOrder) => void;
}

export const EditOrderDialog: FC<Props> = memo(({
  isOpen,
  handleClose,
  handleSave,
  handleDelete,
  order,
}) => {
  const {
    // eslint-disable-next-line max-len
    comment, coupon, date, email, entrance, flat, floor, house, intercomCode, isPaid, nameField, paymentType, phoneNumberField, selectedDeliveryType, street, totalCost,
  } = order;

  const fields = {
    comment: useState(comment),
    coupon: useState(coupon),
    date: useState(date),
    email: useState(email),
    entrance: useState(entrance),
    flat: useState(flat),
    floor: useState(floor),
    house: useState(house),
    intercomCode: useState(intercomCode),
    isPaid: useState(isPaid),
    nameField: useState(nameField),
    paymentType: useState(paymentType),
    phoneNumberField: useState(phoneNumberField),
    selectedDeliveryType: useState(selectedDeliveryType),
    street: useState(street),
    totalCost: useState(totalCost),
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        {(Object.keys(fields) as Array<keyof typeof fields>).map((key) => {
          const field = fields[key];

          return (
            <TextField
              key={key}
              autoFocus
              margin="dense"
              id={key}
              label={key}
              type="text"
              fullWidth
              variant="standard"
              value={field[0]}
              onChange={({ target }) => field[1](target.value as any)}
            />
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={() => handleSave({} as IOrder)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
});
