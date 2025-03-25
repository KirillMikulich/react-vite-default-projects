import { createRoute } from '@tanstack/react-router';
import ParentRoute from './__root';
import App from '@/pages/Main/App';

const IndexRoute = createRoute({
  getParentRoute: () => ParentRoute,
  path: '/',
  component: App,
});

export default IndexRoute;
