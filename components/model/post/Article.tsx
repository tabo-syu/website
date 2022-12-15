import PublishDate from '@/components/model/post/PublishDate';
import TagList from '@/components/model/post/TagList';
import { H2, H3, H4, H5, H6 } from '@/components/ui/Heading';
import Hr from '@/components/ui/Hr';
import Img from '@/components/ui/Img';
import { Li, Ol, Ul } from '@/components/ui/List';
import { Table, Td, Th, THead, Tr } from '@/components/ui/Table';
import { A, Blockquote, P, Pre } from '@/components/ui/Text';
import { Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import 'prismjs/themes/prism-okaidia.min.css';

type Props = {
  post: Post;
};
const Article: React.FC<Props> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  const components = {
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    a: A,
    ul: Ul,
    ol: Ol,
    li: Li,
    table: Table,
    thead: THead,
    tr: Tr,
    th: Th,
    td: Td,
    blockquote: Blockquote,
    // TODO: remark プラグインで書き換えた HTML に対して contentlayer が component で上書きしてしまう
    // code: Code,
    pre: Pre,
    hr: Hr,
    img: Img,
  };

  return (
    <article>
      <h1 className='mb-10 text-4xl font-bold'>{post.title}</h1>
      <div className='mb-6'>
        <TagList tags={post.tags} />
        <PublishDate date={post.date} />
      </div>
      <MDXContent components={components} />
    </article>
  );
};

export default Article;
