import ParentRoute from '@/routes/__layout';
import IndexRoute from '@/routes/main';
import AboutRoute from './routes/about';
import { createRouter } from '@tanstack/react-router';

const routeTree = ParentRoute.addChildren([IndexRoute, AboutRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
