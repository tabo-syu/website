import Image from 'next/image';

type Props = {
  title: string;
  subtitle?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};
const Media: React.FC<Props> = (props) => {
  return (
    <div className='flex items-center'>
      <div className='mr-6 basis-2/5 md:mr-9'>
        <Image
          src={props.image.src}
          width={props.image.width}
          height={props.image.height}
          alt={props.image.alt}
        />
      </div>
      <div className='basis-full'>
        <h4 className='text-lg md:text-xl'>{props.title}</h4>
        {props.subtitle ? (
          <p className='mt-1 text-sm text-gray-400'>{props.subtitle}</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Media;
