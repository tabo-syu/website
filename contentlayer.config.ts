import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeImgSize from 'rehype-img-size';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: '記事のタイトル',
      required: true,
    },
    description: {
      type: 'string',
      description: '記事の概要',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'タグリスト',
    },
    image: {
      type: 'string',
      required: true,
      description: '記事のサムネイルに使う画像のパス',
    },
    date: {
      type: 'date',
      description: '投稿日時',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkPrism],
    // TODO: 型がうまく合わない
    rehypePlugins: [[rehypeImgSize as any, { dir: 'public' }]],
  },
});
