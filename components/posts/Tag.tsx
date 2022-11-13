import Link from 'next/link';

type Props = {
  tag: string;
};
const Tag: React.FC<Props> = (props) => {
  return (
    <li className='underline-offset-1 hover:underline'>
      <Link href={`/posts/tags/${props.tag}`}>
        <span className='rounded-sm border border-gray-500 px-2 py-1 text-xs leading-none'>
          {props.tag}
        </span>
      </Link>
    </li>
  );
};

export default Tag;
