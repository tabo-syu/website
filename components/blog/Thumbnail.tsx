import Image from 'next/image';

type Props = {
  title: string;
  src: string;
};
const Thumbnail: React.FC<Props> = (props) => {
  return (
    <Image
      className='rounded-t'
      src={`/${encodeURIComponent(props.src)}`}
      width={328}
      height={246}
      alt={`${props.title}のサムネイル`}
    />
  );
};

export default Thumbnail;
