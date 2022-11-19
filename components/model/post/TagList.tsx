import Tag from '@/components/model/post/Tag';
import { Post } from 'contentlayer/generated';
import { AiFillTags } from 'react-icons/ai';

type Props = {
  tags: Post['tags'];
};
const TagList: React.FC<Props> = ({ tags }) => {
  if (!tags) {
    return <></>;
  }

  return (
    <div className='flex items-center justify-end gap-2'>
      <AiFillTags />
      <ul className='flex gap-2'>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </ul>
    </div>
  );
};

export default TagList;
