import { FaGithub, FaTwitter } from 'react-icons/fa';

const GlobalFooter: React.FC = () => {
  return (
    <footer className='border-t border-gray-900/10 py-4 text-end dark:border-gray-300/10 dark:bg-gray-800'>
      <div className='mx-auto flex max-w-6xl justify-between gap-x-4 px-4'>
        <div className='flex gap-x-3'>
          <a
            href='https://twitter.com/tabo_web'
            target='_blank'
            rel='noreferrer'
            className='hover:text-gray-500 dark:hover:text-gray-400'
          >
            <FaTwitter />
          </a>
          <a
            href='https://github.com/tabo-syu'
            target='_blank'
            rel='noreferrer'
            className='hover:text-gray-500 dark:hover:text-gray-400'
          >
            <FaGithub />
          </a>
        </div>
        <span className='leading-none'>&copy; 2022 tabo-syu</span>
      </div>
    </footer>
  );
};

export default GlobalFooter;
