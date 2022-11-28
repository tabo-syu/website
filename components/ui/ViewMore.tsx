import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';

type Props = {
  href: string;
  text: string;
};
const ViewMore: React.FC<Props> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className='flex items-center justify-end gap-2 text-lg hover:underline'
    >
      {text}
      <SlArrowRight />
    </Link>
  );
};

export default ViewMore;
