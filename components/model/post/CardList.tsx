import Card from '@/components/model/post/Card';
import { Post } from 'contentlayer/generated';

type Props = {
  posts: Post[];
};
const CardList: React.FC<Props> = ({ posts }) => {
  return (
    <section className='grid-rows grid gap-y-10 gap-x-7 md:grid-cols-3'>
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </section>
  );
};

export default CardList;
