import PostsIdRoute from '@/routes/posts/$postId';
import { FC } from 'react';

const PostsById: FC = () => {
  const { postId } = PostsIdRoute.useParams();
  return <div>Post {postId}</div>;
};

export default PostsById;
