// @ts-nocheck
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeImgSize from 'rehype-img-size';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';

type Meta = {
  title?: string;
  tags?: string[];
  thumbnail?: string;
  publishedAt?: string;
  updatedAt?: string;
};

type CompileResult = MDXRemoteSerializeResult<undefined, Meta>;
const compile = (content: string): Promise<CompileResult> => {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkPrism],
      // TODO: ts の型チェックが合わない
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }]],
      providerImportSource: '@mdx-js/react',
    },
    parseFrontmatter: true,
  };

  const result = serialize(content, options);

  return serialize(content, options);
};

export { CompileResult, compile, Meta };
