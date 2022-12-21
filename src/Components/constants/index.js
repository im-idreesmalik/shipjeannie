import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import {
  AddProductPage,
  CreateOrderPage,
  CreateShipmentPage,
  DashboardPage,
  OrderListPage,
  ShipmentListPage,
} from '../../pages';
export const NavItems = [
  {
    id: 1,
    icon: <HomeRoundedIcon />,
    lable: 'Dashboard',
    path: '/',
    element: <DashboardPage />,
  },
  {
    id: 2,
    icon: <HomeRoundedIcon />,
    lable: 'Add Product',
    path: '/add-product',
    element: <AddProductPage />,
  },
  {
    id: 3,
    icon: <HomeRoundedIcon />,
    lable: 'Create Order',
    path: '/create-order',
    element: <CreateOrderPage />,
  },
  {
    id: 4,
    icon: <HomeRoundedIcon />,
    lable: 'Order List',
    path: '/order-list',
    element: <OrderListPage />,
  },
  {
    id: 5,
    icon: <HomeRoundedIcon />,
    lable: 'Create Shipment',
    path: '/create-shipment',
    element: <CreateShipmentPage />,
  },
  {
    id: 6,
    icon: <HomeRoundedIcon />,
    lable: 'Shipment List',
    path: '/shipment-list',
    element: <ShipmentListPage />,
  },
];
