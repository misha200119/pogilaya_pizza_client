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

  const [comment_, set_comment] = useState(comment);
  const [coupon_, setCoupon_] = useState(comment);
  const [date_, setDate_] = useState(date);
  const [email_, setEmail_] = useState(email);
  const [entrance_, setEntrance_] = useState(entrance);
  const [flat_, setFlat_] = useState(flat);
  const [floor_, setFloor_] = useState(floor);
  const [house_, setHouse_] = useState(house);
  const [intercomCode_, setIntercomCode_] = useState(intercomCode);
  const [isPaid_, setIsPaid_] = useState(isPaid);
  const [nameField_, setNameField_] = useState(nameField);
  const [paymentType_, setPaymentType_] = useState(paymentType);
  const [phoneNumberField_, setPhoneNumberField_] = useState(phoneNumberField);
  const [selectedDeliveryType_, setSelectedDeliveryType_] = useState(selectedDeliveryType);
  const [street_, setStreet_] = useState(street);
  const [totalCost_, setTotalCost_] = useState(totalCost);

  // eslint-disable-next-line no-console
  console.log(order, 'order');

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
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
