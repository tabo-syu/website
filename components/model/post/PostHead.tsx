import Head from '@/components/ui/Head';
import { Post } from 'contentlayer/generated';

type Props = {
  post: Post;
};
const PostHead: React.FC<Props> = ({ post }) => {
  return (
    <Head
      {...{
        type: 'article',
        title: post.title,
        description: post.description,
        image: post.image,
      }}
    />
  );
};

export default PostHead;
