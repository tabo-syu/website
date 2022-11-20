type Props = {
  children?: React.ReactNode;
};

const P: React.FC<Props> = (props) => {
  return <p className='mb-8 leading-loose' {...props} />;
};

const A: React.FC<Props> = (props) => {
  return (
    <a
      className='text-cyan-600 underline underline-offset-2 visited:text-purple-600 
        dark:text-cyan-400 dark:visited:text-purple-400'
      {...props}
    />
  );
};

const Blockquote: React.FC<Props> = ({ children }) => {
  return (
    <blockquote className='border-l-4 border-gray-400 pl-5 italic text-gray-500 dark:text-gray-400'>
      {children}
    </blockquote>
  );
};

const Code: React.FC<Props> = ({ children }) => {
  return (
    <code className='mx-1 rounded-sm bg-gray-200 px-2 py-0.5 dark:bg-gray-700'>
      {children}
    </code>
  );
};

export { P, A, Blockquote, Code };
