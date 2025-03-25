import Posts from '@/pages/Posts/Posts';
import { createRoute } from '@tanstack/react-router';
import ParentRoute from '../__root';

const PostsRoute = createRoute({
  getParentRoute: () => ParentRoute,
  path: '/posts',
  component: Posts,
});

export default PostsRoute;
