import Article from '@/components/model/post/Article';
import Toc from '@/components/model/post/Toc';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): Props['params'][] {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function Page({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  const headings = Array.from(
    post.body.raw.matchAll(/^(#{2,6})(.*)$/gm),
    (heading) => ({
      level: heading[1].split('').length,
      text: heading[2].trim(),
    })
  );

  return (
    <div className='mx-auto flex max-w-6xl justify-around gap-x-8 px-2 md:px-4'>
      <div className='min-w-0 max-w-3xl'>
        <div className='min-h-[calc(100vh_-_77px_-_49px)] bg-white px-4 pt-20 pb-32 dark:bg-gray-900 md:px-8'>
          <Article post={post} />
        </div>
      </div>
      {headings.length ? (
        <div className='hidden max-w-xs shrink-0 lg:block'>
          <Toc headings={headings} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
