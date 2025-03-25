import ParentRoute from '@/routes/__root';
import IndexRoute from '@/routes/main';
import AboutRoute from './routes/about';
import { createRouter } from '@tanstack/react-router';
import PostsRoute from './routes/posts/root';
import PostsIdRoute from './routes/posts/$postId';

const routeTree = ParentRoute.addChildren([IndexRoute, AboutRoute, PostsRoute, PostsIdRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
