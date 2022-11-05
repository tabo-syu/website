import Article from '@/components/Article';
import { getMdxContent, getMdxPaths, getMdxSlugs, mdxDir } from '@/lib/mdx';
import { serialize } from 'next-mdx-remote/serialize';

const generateStaticParams = async () => {
  const paths = await getMdxPaths(mdxDir);
  const slugs = getMdxSlugs(paths);

  return slugs;
};

export { generateStaticParams };

type Props = {
  params: {
    slug: string;
  };
};
const Page = async (props: Props) => {
  const content = await getMdxContent(mdxDir, props.params.slug);
  const mdx = await serialize(content);

  return <Article {...mdx} />;
};
export default Page;
