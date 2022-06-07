import { lazy } from 'react';

const routes = [
  {
    path: 'ticket',
    component: lazy(() => import('./../components/TicketForm/TicketForm')),
    exact: true
  },
];

export default routes;