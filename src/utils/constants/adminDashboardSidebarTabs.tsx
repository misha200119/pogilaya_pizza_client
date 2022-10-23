/* eslint-disable react/react-in-jsx-scope */
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { sidebarTabDataModel } from '../../ui/components/molecules/ResponsiveSidebar';
import { Routes } from './routes';

export const adminDashboardSidebarTabs: Array<sidebarTabDataModel> = [
  {
    icon: <InboxIcon />,
    text: 'Dasboard',
    link: Routes.ADMIN_DASHBOARD,
  },
  {
    icon: <InboxIcon />,
    text: 'Orders',
    link: Routes.ADMIN_ORDERS,
  },
];
