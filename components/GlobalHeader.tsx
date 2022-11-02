import { Zen_Dots } from '@next/font/google';
import Link from 'next/link';

const zen = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

const GlobalHeader: React.FC = () => {
  return (
    <header className='border-b border-gray-900/10 px-8 py-5 backdrop-blur dark:border-gray-300/10'>
      <h1
        className={`${zen.className} font-icon text-4xl font-bold leading-none`}
      >
        <Link href={{ pathname: '/' }}>tabo-syu</Link>
      </h1>
    </header>
  );
};

export default GlobalHeader;
