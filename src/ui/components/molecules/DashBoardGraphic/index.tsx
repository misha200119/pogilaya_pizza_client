/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Line } from '@ant-design/charts';
import React, {
  memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import styled from 'styled-components';
import {
  Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { Container } from '../../helpers/responsive';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../utils/hooks/reduxHooks';
import { fetchAnalitics, isLoadingData, salesAnalitics } from '../../../../store/slices/adminSlice';
import { Loading } from '../../../pages/Loading';
import { ChartConfigurationNames, chartConfigurations } from '../../../../utils/constants/chartConfigurations';

const StyledResponsiveContainer = memo(styled(Container)`
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
`);

export const DashBoardGraphic = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAnalitics());
  }, []);
  const isLoading = useAppSelector(isLoadingData);
  const salesAnalitic = useAppSelector(salesAnalitics);
  const [analiticsType, setAnaliticsType] = useState<ChartConfigurationNames>(
    ChartConfigurationNames.DOING_ORDERS,
  );

  const [data, chartConfig] = useMemo(() => {
    if (salesAnalitic) {
      const { mapper, config } = chartConfigurations[analiticsType];
      const mappedData = salesAnalitic.map(mapper);

      return [mappedData, config];
    }

    return [null, null];
  }, [salesAnalitic, analiticsType]);

  const typeAnalyticChangehandler = useCallback((event: SelectChangeEvent) => {
    setAnaliticsType(event.target.value as ChartConfigurationNames);
  }, []);

  if (isLoading) {
    return <Loading width="100%" height="100%" />;
  }

  if (data === null || chartConfig === null) {
    return <h1>Error on loading data</h1>;
  }

  return (
    <StyledResponsiveContainer>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="analitic-select-label">Type</InputLabel>
          <Select
            labelId="analitic-select-label"
            value={analiticsType}
            label="Type"
            onChange={typeAnalyticChangehandler}
          >
            {(
              Object.keys(ChartConfigurationNames) as Array<
              keyof typeof ChartConfigurationNames
              >
            ).map((key) => (
              <MenuItem key={key} value={ChartConfigurationNames[key]}>
                {ChartConfigurationNames[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ height: '99%' }}>
          <Line {...chartConfig} data={data} padding={[20, 30]} />
        </Box>
      </Box>
    </StyledResponsiveContainer>
  );
});
