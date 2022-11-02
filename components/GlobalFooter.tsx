import { FaGithub, FaTwitter } from 'react-icons/fa';

const GlobalFooter: React.FC = () => {
  return (
    <footer className='flex justify-between gap-x-4 border-t border-gray-900/10 p-4 text-end dark:border-gray-300/10 dark:bg-gray-800'>
      <span className='leading-none'>&copy; 2022</span>
      <div className='flex gap-x-3'>
        <a href='https://twitter.com/tabo_web' target='_blank' rel='noreferrer'>
          <FaTwitter />
        </a>
        <a href='https://github.com/tabo-syu' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default GlobalFooter;
