/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, {
  memo, FC, useState, useCallback, useMemo,
} from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Autocomplete,
  CircularProgress,
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment-timezone';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import {
  Grid, GridItem, GridItemArea, GridWithTemplate,
} from '../../helpers/grid';
import SwitchButtonSelector from '../SwitchButtonSelector';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/reduxHooks';
import {
  countGoodsInCartAndCost, doOrder, isLoadingOrderRequest,
} from '../../../../store/slices/cartSlice';
import Button from '../../athoms/Button';

const deliveryTypes = [
  {
    value: 'Delivery',
    displayed:
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" width={40}>
      <path d="M407.5 280a55.219 55.219 0 0 0-17.879 2.972l-7.645-15.291A72.047 72.047 0 0 1 407.5 263c10.076 0 19.826 2.025 28.978 6.021a7.5 7.5 0 0 0 6.001-13.748C431.422 250.447 419.654 248 407.5 248a86.924 86.924 0 0 0-32.257 6.215l-27.785-55.57c1.314.229 2.663.355 4.042.355h16a7.5 7.5 0 0 0 7.5-7.5v-32a7.5 7.5 0 0 0-7.5-7.5h-16c-9.126 0-17.048 5.232-20.939 12.852l-7.931-15.862c-4.006-8.013-12.061-12.99-21.019-12.99H287.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h14.111a8.455 8.455 0 0 1 7.603 4.699l19.424 38.847-3.647 1.824C316.978 200.376 312 208.43 312 217.389V296h-64.5c-13.509 0-24.5-10.99-24.5-24.5V239h.5c12.958 0 23.5-10.542 23.5-23.5S236.458 192 223.5 192h-64c-6.425 0-12.253 2.594-16.5 6.787V87.5c0-8.547-6.953-15.5-15.5-15.5h-112C6.953 72 0 78.953 0 87.5v112c0 8.547 6.953 15.5 15.5 15.5h16.834a19.673 19.673 0 0 0-.521 4.74c.168 10.62 8.945 19.26 19.566 19.26h40.322a100.245 100.245 0 0 0-13.03 9.914c-16.617 14.933-25.497 32.727-28.266 44.4-1.493 6.295-.06 12.795 3.933 17.836 3.938 4.973 9.837 7.821 16.189 7.821h.041l3.952-.007A55.632 55.632 0 0 0 72 335.5c0 30.603 24.897 55.5 55.5 55.5 28.058 0 51.305-20.934 54.979-48H327.5a7.5 7.5 0 0 0 7.5-7.5c0-4.887.488-9.769 1.451-14.509 4.006-19.734 15.971-36.281 32.117-46.586l7.643 15.286C361.605 299.699 352 316.497 352 335.5c0 30.603 24.897 55.5 55.5 55.5s55.5-24.897 55.5-55.5-24.897-55.5-55.5-55.5zm-248-73h64c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5h-64c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5zM15 87.5a.5.5 0 0 1 .5-.5h112a.5.5 0 0 1 .5.5V104H15V87.5zm.5 112.5a.5.5 0 0 1-.5-.5V119h113v80.5a.5.5 0 0 1-.5.5h-112zm35.879 24c-2.479 0-4.528-2.017-4.567-4.496A4.536 4.536 0 0 1 50.318 215l85.695.024c-.003.159-.012.316-.012.476 0 2.997.57 5.862 1.597 8.5H51.379zm19.161 79.972h-.012c-2.383 0-3.799-1.337-4.431-2.135-1.123-1.418-1.522-3.262-1.096-5.06C70.528 273.477 99.299 239 143.5 239c34.313 0 47.1 32.793 47.1 53.464 0 5.606-3.095 11.288-9.011 11.299l-111.049.209zM136 335.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zm-8.5 40.5c-22.332 0-40.5-18.168-40.5-40.5a40.55 40.55 0 0 1 3.556-16.566l20.33-.038C106.634 323.151 104 329.023 104 335.5c0 12.958 10.542 23.5 23.5 23.5s23.5-10.542 23.5-23.5c0-6.509-2.661-12.407-6.951-16.667l20.332-.039A40.54 40.54 0 0 1 168 335.499C168 357.832 149.832 376 127.5 376zm194.251-57.993a87.579 87.579 0 0 0-1.433 9.993h-137.83a55.592 55.592 0 0 0-2.073-9.235l1.2-.002c13.673-.025 23.984-11.331 23.984-26.299 0-16.229-5.401-32.675-14.819-45.119a62.683 62.683 0 0 0-7.572-8.345H208v32.5c0 21.78 17.72 39.5 39.5 39.5h72a7.456 7.456 0 0 0 4.436-1.462 86.48 86.48 0 0 0-2.185 8.469zM351.5 167h8.5v17h-8.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5zM327 301.213v-83.825c0-3.24 1.8-6.153 4.699-7.603l3.647-1.824 26.49 52.979c-15.314 9.401-27.63 23.404-34.836 40.273zM407.5 376c-22.332 0-40.5-18.168-40.5-40.5s18.168-40.5 40.5-40.5 40.5 18.168 40.5 40.5-18.168 40.5-40.5 40.5z"></path>
      <path d="M407.5 312c-12.958 0-23.5 10.542-23.5 23.5s10.542 23.5 23.5 23.5 23.5-10.542 23.5-23.5-10.542-23.5-23.5-23.5zm0 32c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"></path>
    </svg>
    <div>
      Delivery
    </div>
  </>,
  },
  {
    value: 'Carry out',
    displayed:
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.4 489.4" width={40}>
      <path d="M347.7 263.75h-66.5c-18.2 0-33 14.8-33 33v51c0 18.2 14.8 33 33 33h66.5c18.2 0 33-14.8 33-33v-51c0-18.2-14.8-33-33-33zm9 84c0 5-4.1 9-9 9h-66.5c-5 0-9-4.1-9-9v-51c0-5 4.1-9 9-9h66.5c5 0 9 4.1 9 9v51z"></path>
      <path d="M489.4 171.05c0-2.1-.5-4.1-1.6-5.9l-72.8-128c-2.1-3.7-6.1-6.1-10.4-6.1H84.7c-4.3 0-8.3 2.3-10.4 6.1l-72.7 128c-1 1.8-1.6 3.8-1.6 5.9 0 28.7 17.3 53.3 42 64.2v211.1c0 6.6 5.4 12 12 12h381.3c6.6 0 12-5.4 12-12v-209.6c0-.5 0-.9-.1-1.3 24.8-10.9 42.2-35.6 42.2-64.4zM91.7 55.15h305.9l56.9 100.1H34.9l56.8-100.1zm256.6 124c-3.8 21.6-22.7 38-45.4 38s-41.6-16.4-45.4-38h90.8zm-116.3 0c-3.8 21.6-22.7 38-45.4 38s-41.6-16.4-45.5-38H232zm-207.2 0h90.9c-3.8 21.6-22.8 38-45.5 38-22.7.1-41.6-16.4-45.4-38zm176.8 255.2h-69v-129.5c0-9.4 7.6-17.1 17.1-17.1h34.9c9.4 0 17.1 7.6 17.1 17.1v129.5h-.1zm221.7 0H225.6v-129.5c0-22.6-18.4-41.1-41.1-41.1h-34.9c-22.6 0-41.1 18.4-41.1 41.1v129.6H66v-193.3c1.4.1 2.8.1 4.2.1 24.2 0 45.6-12.3 58.2-31 12.6 18.7 34 31 58.2 31s45.5-12.3 58.2-31c12.6 18.7 34 31 58.1 31 24.2 0 45.5-12.3 58.1-31 12.6 18.7 34 31 58.2 31 1.4 0 2.7-.1 4.1-.1v193.2zm-4.1-217.1c-22.7 0-41.6-16.4-45.4-38h90.9c-3.9 21.5-22.8 38-45.5 38z"></path>
    </svg>
    <div>
      Carry out
    </div>
  </>,
  },
];

const streets = [
  { label: '123' },
  { label: '321321' },
  { label: 'dsfsad' },
  { label: 'The Dark Knight' },
  { label: '12 Angry Men' },
  { label: "Schindler's List" },
  { label: 'Pulp Fiction' },
];

const paymentTypes = ['Cash', 'Card online', 'Card to courier'];

const OrderFormContainer = memo(styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  grid-gap: 50px;
`);

const FormSection = memo(styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`);

const SubmitFormSection = memo(styled(FormSection)`
  justify-content: center;
  align-items: center;
`);

const FormSectionTitle = memo(styled.h2`
`);

const ToCartButton = memo(styled(Button)`
  height: 50px;
  width: 214px;
  border-radius: 15px;

  color: #fff;
  background-color: #e31837;
  
  &:hover {
    background-color: #a31228;
  }

  transition: all 0.3s ease;
`);

const StyledInput = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.primary,
  },
  '& label': {
    color: theme.primary,
  },
  '& .MuiInput-underline::after': {
    borderBottomColor: theme.primary,
  },
  '& .MuiInput-root::before': {
    borderBottomColor: theme.primary,
  },
  '& .MuiInput-root': {
    '&:hover:not(.Mui-disabled):before': {
      borderColor: theme.primary,
    },
    '& .MuiInput-input': {
      borderColor: theme.primary,
      color: theme.primary,
      '&::after': {
        backgroundColor: theme.primary,
      },
      '&::before': {
        backgroundColor: theme.primary,
      },
    },
  },
}));

export const OrderForm: FC<{}> = memo(() => {
  const [selectedDeliveryType, setSelectedDeliveryType] = useState(deliveryTypes[0].value);
  const [nameField, setNameField] = useState('');
  const [phoneNumberField, setPhoneNumberField] = useState('');
  const [email, setEmail] = useState('');
  const [_street, _setStreet] = useState({ label: '' });
  const street = useMemo(() => _street.label, [_street]);
  const [house, setHouse] = useState('');
  const [flat, setFlat] = useState('');
  const [entrance, setEntrance] = useState('');
  const [intercomCode, setIntercomCode] = useState('');
  const [floor, setFloor] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(moment());
  const [coupon, setCoupon] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const _countGoodsInCartAndCost = useAppSelector(countGoodsInCartAndCost);
  const _isLoadingOrderRequest = useAppSelector(isLoadingOrderRequest);

  const dispatch = useAppDispatch();
  const confirmOrder = useCallback((event) => {
    event.preventDefault();
    dispatch(
      doOrder({
        selectedDeliveryType,
        nameField,
        phoneNumberField,
        email,
        street,
        house,
        flat,
        entrance,
        intercomCode,
        floor,
        comment,
        date,
        coupon,
        paymentType,
      }),
    );
  }, [
    dispatch,
    selectedDeliveryType,
    nameField,
    phoneNumberField,
    email,
    house,
    flat,
    entrance,
    intercomCode,
    floor,
    comment,
    date,
    coupon,
    paymentType,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <OrderFormContainer>
        <FormSection>
          <FormSectionTitle>Placing an order</FormSectionTitle>
          <SwitchButtonSelector
            buttonsHeight="50px"
            display="grid"
            gridColumnsCount="2"
            gap="10px"
            values={deliveryTypes}
            currentValue={selectedDeliveryType}
            setCurrentValue={setSelectedDeliveryType}
            buttonsBorderRadius="20px"
            buttonContentGap="20px"
            color="red"
            backgroundColor="#f8f8f8"
            colorOnSelected="#fff"
            backgroundColorOnSelected="#4f4f4f"
            colorOnHover="#fff"
            backgroundColorOnHover="#1a1919"
          />
        </FormSection>
        <FormSection>
          <FormSectionTitle>Contacts</FormSectionTitle>
          <Grid
            mobileColumnsCount="1"
            tabletColumnsCount="3"
            desktopColumnsCount="3"
            mobileGridGap="10px"
            tabletGridGap="10px"
            desktopGridGap="10px"
          >
            <GridItem>
              <StyledInput
                variant="standard"
                label="Name"
                value={nameField}
                onChange={({ target }) => {
                  setNameField(target.value);
                }}
                fullWidth
              />
            </GridItem>
            <GridItem>
              <StyledInput
                variant="standard"
                label="Phone number"
                value={phoneNumberField}
                onChange={({ target }) => {
                  setPhoneNumberField(target.value);
                }}
                fullWidth
              />
            </GridItem>
            <GridItem>
              <StyledInput
                variant="standard"
                label="E-mail"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
                fullWidth
              />
            </GridItem>
          </Grid>
        </FormSection>
        <FormSection>
          <FormSectionTitle>Adress</FormSectionTitle>
          <GridWithTemplate
            mobileColumnsCount="2"
            tabletColumnsCount="3"
            desktopColumnsCount="3"
            mobileGridGap="20px 10px"
            tabletGridGap="20px 10px"
            desktopGridGap="20px 10px"
            templateAreasMobile={
              '"location location" "street street" "house flat" "front-door intercom-code" "floor ." "comment comment"'
            }
            templateAreasTablet={
              '"location street street" "house flat front-door" "intercom-code floor ." "comment comment ."'
            }
            templateAreasDesktop={
              '"location street street" "house flat front-door" "intercom-code floor ." "comment comment ."'
            }
          >
            <GridItemArea areaName="location">
              <LocationOnIcon />
              location
            </GridItemArea>
            <GridItemArea areaName="street">
              {/* in future will need async request to get streets of city https://mui.com/material-ui/react-autocomplete/ */}
              <Autocomplete
                disablePortal
                options={streets}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Street" />
                )}
                id="blur-on-select"
                value={_street}
                onChange={(_, value) => {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  _setStreet(value!);
                }}
              />
            </GridItemArea>
            <GridItemArea areaName="house">
              <StyledInput
                variant="standard"
                label="House №"
                value={house}
                onChange={({ target }) => {
                  setHouse(target.value);
                }}
                fullWidth
              />
            </GridItemArea>
            <GridItemArea areaName="flat">
              <StyledInput
                variant="standard"
                label="Flat №"
                value={flat}
                onChange={({ target }) => {
                  setFlat(target.value);
                }}
                fullWidth
              />
            </GridItemArea>
            <GridItemArea areaName="front-door">
              <StyledInput
                variant="standard"
                label="Entrance №"
                value={entrance}
                onChange={({ target }) => {
                  setEntrance(target.value);
                }}
                fullWidth
              />
            </GridItemArea>
            <GridItemArea areaName="intercom-code">
              <StyledInput
                variant="standard"
                label="Intercom code"
                value={intercomCode}
                onChange={({ target }) => {
                  setIntercomCode(target.value);
                }}
                fullWidth
              />
            </GridItemArea>
            <GridItemArea areaName="floor">
              <StyledInput
                variant="standard"
                label="Floor №"
                value={floor}
                onChange={({ target }) => {
                  setFloor(target.value);
                }}
                fullWidth
              />
            </GridItemArea>
            <GridItemArea areaName="comment">
              <FormControl variant="standard" fullWidth>
                <TextField
                  label="Comment"
                  value={comment}
                  onChange={({ target }) => {
                    setComment(target.value);
                  }}
                  multiline
                  maxRows={2}
                />
              </FormControl>
            </GridItemArea>
          </GridWithTemplate>
        </FormSection>
        <FormSection>
          <FormSectionTitle>Date and time</FormSectionTitle>
          <GridWithTemplate
            mobileColumnsCount="2"
            tabletColumnsCount="3"
            desktopColumnsCount="3"
            mobileGridGap="20px 10px"
            tabletGridGap="20px 10px"
            desktopGridGap="20px 10px"
            templateAreasMobile={'"date time"'}
            templateAreasTablet={'"date time ."'}
            templateAreasDesktop={'"date time ."'}
          >
            <GridItemArea areaName="date">
              <DesktopDatePicker
                label="Date"
                inputFormat="DD/MM/YYYY"
                value={date}
                onChange={(selectedDate) => {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  setDate(selectedDate!);
                }}
                renderInput={(params) => <TextField {...params} />}
                disablePast
              />
            </GridItemArea>
            <GridItemArea areaName="time">
              <TimePicker
                label="Time"
                value={date}
                onChange={(selectedTime) => {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  setDate(selectedTime!);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </GridItemArea>
          </GridWithTemplate>
        </FormSection>
        <FormSection>
          <FormSectionTitle>Payment</FormSectionTitle>
          <GridWithTemplate
            mobileColumnsCount="2"
            tabletColumnsCount="3"
            desktopColumnsCount="3"
            mobileGridGap="20px 10px"
            tabletGridGap="20px 10px"
            desktopGridGap="20px 10px"
            templateAreasMobile={'"coupon coupon" "payment-type payment-type"'}
            templateAreasTablet={
              '"coupon coupon coupon" "payment-type payment-type payment-type"'
            }
            templateAreasDesktop={
              '"coupon coupon coupon" "payment-type payment-type payment-type"'
            }
          >
            <GridItemArea areaName="coupon">
              <FormControl variant="standard" fullWidth>
                <InputLabel id="coupon-field">Coupon</InputLabel>
                <Select
                  labelId="coupon-field"
                  value={coupon}
                  onChange={({ target }) => {
                    setCoupon(target.value);
                  }}
                  label="Coupon"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Thirty</MenuItem>
                </Select>
              </FormControl>
            </GridItemArea>
            <GridItemArea areaName="payment-type">
              <FormControl variant="standard" fullWidth>
                <InputLabel id="payment-type-field">Payment type</InputLabel>
                <Select
                  labelId="payment-type-field"
                  value={paymentType}
                  onChange={({ target }) => {
                    setPaymentType(target.value);
                  }}
                  label="Payment type"
                >
                  {paymentTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItemArea>
          </GridWithTemplate>
        </FormSection>
        <SubmitFormSection>
          <FormSectionTitle>Total</FormSectionTitle>
          <p>
            {_countGoodsInCartAndCost.totalCost}
            UAH
          </p>
          <ToCartButton onClick={confirmOrder}>
            {_isLoadingOrderRequest ? (
              <CircularProgress disableShrink color="inherit" size="30px" />
            ) : (
              'Order'
            )}
          </ToCartButton>
        </SubmitFormSection>
      </OrderFormContainer>
    </LocalizationProvider>
  );
});
