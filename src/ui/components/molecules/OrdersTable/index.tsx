/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC, memo, useCallback, useState,
} from 'react';
import {
  Checkbox,
  // eslint-disable-next-line max-len
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Theme, useMediaQuery, useTheme,
} from '@mui/material';
import IOrder from '../../../../utils/models/order/IOrder';
import { EditOrderDialog } from '../EditOrderDialog';
import PartialIOrder from '../../../../utils/types/partialIOrder';
import { useAppDispatch } from '../../../../utils/hooks/reduxHooks';
import { deleteOrder, patchOrder } from '../../../../store/slices/adminSlice';

interface Column {
  id: 'number' | 'paymentType' | 'cost' | 'isPaid';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'number', label: 'Number', minWidth: 170 },
  { id: 'paymentType', label: 'Payment\u00a0Type', minWidth: 100 },
  {
    id: 'cost',
    label: 'Cost',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'isPaid',
    label: 'Is\u00a0Paid',
    minWidth: 170,
    align: 'right',
  },
];

interface RowData {
  number: number;
  paymentType: string;
  cost: string;
  isPaid: boolean;
  _object: IOrder;
}

interface Props {
  orders: Array<IOrder>;
}

export const OrdersTable: FC<Props> = memo(({ orders }) => {
  const rows: Array<RowData> = orders.map((order, index) => ({
    number: index,
    paymentType: order.paymentType,
    cost: order.totalCost,
    isPaid: order.isPaid,
    _object: order,
  }));

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editableObject, setEditableObject] = useState<null | IOrder>(null);
  const [isEditablePopupOpen, setIsEditablePopupOpen] = useState(false);

  const handleChangePage = useCallback(
    (_, newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    [setRowsPerPage, setPage],
  );

  const handleEditRowClick = useCallback((targetObject: IOrder) => {
    setEditableObject(targetObject);
    setIsEditablePopupOpen(true);
  }, [setEditableObject, setIsEditablePopupOpen]);

  const handleEditDialogClose = useCallback(() => {
    setEditableObject(null);
    setIsEditablePopupOpen(false);
  }, [setIsEditablePopupOpen]);

  const handleOnDeleteEditing = useCallback(async () => {
    if (editableObject) {
      await dispatch(deleteOrder(editableObject._id));
      setEditableObject(null);
      setIsEditablePopupOpen(false);
    }
  }, [editableObject, setEditableObject]);

  const handleOnSaveEditing = useCallback((editedObject: PartialIOrder) => {
    if (editableObject) {
      dispatch(patchOrder({ id: editableObject._id, fields: editedObject }));
    }
  }, [editableObject]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: `calc(100vh - ${matches ? '64px' : '56px'})`,
        }}
      >
        <TableContainer sx={{ flexGrow: 1 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.number}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleEditRowClick(row._object)}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        const isValueBoolean = typeof value === 'boolean';

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {isValueBoolean ? (
                              <Checkbox
                                color="primary"
                                checked={value as boolean}
                                readOnly
                              />
                            ) : column.format && typeof value === 'number' ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ overflow: 'hidden' }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {isEditablePopupOpen && editableObject && (
        <EditOrderDialog
          order={editableObject}
          isOpen={isEditablePopupOpen}
          handleClose={handleEditDialogClose}
          handleSave={handleOnSaveEditing}
          handleDelete={handleOnDeleteEditing}
        />
      )}
    </>
  );
});
