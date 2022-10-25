/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField,
} from '@mui/material';
import {
  DesktopDatePicker, DesktopDateTimePicker, LocalizationProvider, TimePicker,
} from '@mui/x-date-pickers';
import React, {
  FC, memo, useMemo, useState, useCallback,
} from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Moment } from 'moment';
import IOrder from '../../../../utils/models/order/IOrder';
import PartialIOrder from '../../../../utils/types/partialIOrder';

interface Props {
  isOpen: boolean;
  order: IOrder;
  handleClose: () => void;
  handleDelete: () => void;
  handleSave: (newOrder: PartialIOrder) => void;
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
    comment, coupon, date, email, entrance, flat, floor, house, intercomCode, isPaid, nameField, paymentType, phoneNumberField, selectedDeliveryType, street, totalCost, _id,
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

  const needToSave = useMemo(() => {
    const keys = Object.keys(fields);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      const type = typeof fields[key as keyof typeof fields][0];

      switch (type) {
        case 'object':
          if (!(fields[key as keyof typeof fields][0] as Moment).isSame((order[key as keyof typeof fields] as Moment))) {
            return false;
          }

          break;

        default:
          if (fields[key as keyof typeof fields][0] !== order[key as keyof typeof fields]) {
            return false;
          }

          break;
      }
    }

    return true;
  }, [fields, order]);

  const onSave = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changedFields: any = {};

    const keys = Object.keys(fields);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      const type = typeof fields[key as keyof typeof fields][0];

      switch (type) {
        case 'object':
          if (!(fields[key as keyof typeof fields][0] as Moment).isSame((order[key as keyof typeof fields] as Moment))) {
            // eslint-disable-next-line prefer-destructuring
            changedFields[key] = fields[key as keyof typeof fields][0];
          }

          break;

        default:
          if (fields[key as keyof typeof fields][0] !== order[key as keyof typeof fields]) {
            // eslint-disable-next-line prefer-destructuring
            changedFields[key] = fields[key as keyof typeof fields][0];
          }

          break;
      }
    }

    handleSave(changedFields);
  }, [fields, order]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
          Order:
          {' '}
          {_id}
        </DialogTitle>
        <DialogContent>
          {(Object.keys(fields) as Array<keyof typeof fields>).map((key) => {
            const field = fields[key];
            const typeOfField = typeof field[0];

            switch (typeOfField) {
              case 'string':
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
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={({ target }) => field[1](target.value as any)}
                  />
                );
              case 'boolean':
                return (
                  <FormControlLabel
                    key={key}
                    label="Payed"
                    control={(
                      <Checkbox
                        checked={field[0] as boolean}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={() => field[1]((prev: any) => !prev as any)}
                      />
                    )}
                  />
                );

              case 'object':
                return (
                  <Box
                    key={key}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '5px 0 5px 0',
                    }}
                  >
                    <DesktopDatePicker
                      label="Date"
                      inputFormat="DD/MM/YYYY"
                      value={field[0]}
                      onChange={(selectedDate) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        field[1](selectedDate as any);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Time"
                      value={field[0]}
                      onChange={(selectedTime) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        field[1](selectedTime as any);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Box>
                );
              default:
                return null;
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={onSave} disabled={needToSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
});
