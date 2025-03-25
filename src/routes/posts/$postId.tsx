import { createRoute } from '@tanstack/react-router';
import ParentRoute from '../__root';
import PostsById from '@/pages/Posts/PostsById';

const PostsIdRoute = createRoute({
  getParentRoute: () => ParentRoute,
  path: '/posts/$postId',
  component: PostsById,
});

export default PostsIdRoute;
