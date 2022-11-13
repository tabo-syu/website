import { AiFillTags } from 'react-icons/ai';

type Props = {
  children: React.ReactNode;
};
const Tags: React.FC<Props> = (props) => {
  return (
    <div className='flex items-center justify-end gap-2'>
      <AiFillTags />
      <ul className='flex gap-2'>{props.children}</ul>
    </div>
  );
};

export default Tags;
