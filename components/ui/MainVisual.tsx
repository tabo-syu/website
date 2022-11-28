import { zen } from '@/lib/fonts';
import { SlArrowDown } from 'react-icons/sl';

const MainVisual: React.FC = () => {
  return (
    <section
      className={`${zen.className} relative flex h-screen items-center justify-center`}
    >
      <header>
        <h1 className='mb-2 text-6xl leading-none md:mb-4 md:text-9xl'>
          tabo-syu
        </h1>
        <p className='text- text-center text-sm md:text-xl'>
          Curiosity Driven Development
        </p>
      </header>
      <SlArrowDown className='absolute bottom-14 text-2xl md:bottom-10 md:text-3xl' />
    </section>
  );
};

export default MainVisual;
