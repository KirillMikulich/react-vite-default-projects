import { getRouteApi } from '@tanstack/react-router';
import { FC } from 'react';

const route = getRouteApi('/posts/$postId');

const PostsById: FC = () => {
  const { postId } = route.useParams();
  return <div>Post {postId}</div>;
};

export default PostsById;
