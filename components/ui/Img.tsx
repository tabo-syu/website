import Image from 'next/image';

type Props = {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};
const Img: React.FC<Props> = (props) => {
  const width =
    typeof props.width === 'string' ? Number(props.width) : props.width;
  const height =
    typeof props.height === 'string' ? Number(props.height) : props.height;

  return (
    <Image
      src={props.src ?? 'dummy.png'}
      alt={props.alt ?? ''}
      width={width ?? 0}
      height={height ?? 0}
    />
  );
};

export default Img;
