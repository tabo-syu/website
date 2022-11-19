type Props = {
  children?: React.ReactNode;
};
const Blockquote: React.FC<Props> = ({ children }) => {
  return (
    <blockquote className='border-l-4 border-gray-400 pl-5 italic text-gray-500 dark:text-gray-400'>
      {children}
    </blockquote>
  );
};

export default Blockquote;
