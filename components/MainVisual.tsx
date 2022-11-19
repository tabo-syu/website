import { zen } from '@/lib/font';

const MainVisual: React.FC = () => {
  return (
    <section
      className={`${zen.className} flex h-screen items-center justify-center`}
    >
      <header>
        <h1 className='mb-2 text-6xl leading-none md:mb-4 md:text-9xl'>
          tabo-syu
        </h1>
        <p className='text- text-center text-sm md:text-xl'>
          Curiosity Driven Development
        </p>
      </header>
    </section>
  );
};

export default MainVisual;
