import { zen } from '@/lib/fonts';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='border-b border-gray-900/10 py-5 backdrop-blur dark:border-gray-300/10'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4'>
        <h1
          className={`${zen.className} font-icon text-4xl font-bold leading-none`}
        >
          <Link href='/'>tabo-syu</Link>
        </h1>
        <nav className='text-lg'>
          <Link
            href='/posts'
            className='hover:text-gray-500 dark:hover:text-gray-400'
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
