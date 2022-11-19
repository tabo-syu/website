import PublishedAt from '@/components/posts/PublishedAt';
import Tag from '@/components/posts/Tag';
import Tags from '@/components/posts/Tags';
import Thumbnail from '@/components/posts/Thumbnail';
import { Meta } from '@/lib/mdx';
import Link from 'next/link';

type Props = {
  slug: string;
  meta?: Meta;
};
const Panel: React.FC<Props> = (props) => {
  const href = `/posts/${encodeURIComponent(props.slug)}`;

  return (
    <article>
      <Link href={href}>
        <Thumbnail
          title={props.meta?.title ?? ''}
          src={props.meta?.thumbnail ?? ''}
        />
      </Link>
      <div className='rounded-b bg-gray-100 p-4 dark:bg-gray-700'>
        <Link href={href} className='hover:underline'>
          <h2 className='mb-2 text-xl'>{props.meta?.title ?? ''}</h2>
          <PublishedAt date={props.meta?.publishedAt ?? ''} />
        </Link>
        <Tags>
          {props.meta?.tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </Tags>
      </div>
    </article>
  );
};

export default Panel;
