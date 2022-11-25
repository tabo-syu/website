import TagList from '@/components/model/post/TagList';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};
const Post: React.FC<Props> = ({ post }) => {
  return (
    <article>
      <Link href={post.url}>
        <Image
          className='rounded-t'
          src={post.image}
          width={960}
          height={540}
          alt={`${post.title}のサムネイル`}
        />
      </Link>
      <div className='rounded-b bg-gray-100 py-5 px-4 dark:bg-gray-700'>
        <Link href={post.url} className='hover:underline'>
          <h2 className='mb-2 text-xl'>{post.title}</h2>
          <div className='mb-4 text-sm text-gray-400 decoration-gray-400'>
            <time className='pr-1' dateTime={post.date}>
              {post.date}
            </time>
            公開
          </div>
        </Link>
        <TagList tags={post.tags} />
      </div>
    </article>
  );
};

export default Post;
