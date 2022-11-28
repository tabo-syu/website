import PostCard from '@/components/model/post/Post';
import Section from '@/components/ui/Section';
import { Post } from 'contentlayer/generated';

type Props = {
  posts: Post[];
};
const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Section>
      <div className='grid-rows grid gap-y-10 gap-x-7 md:grid-cols-3'>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default PostList;
