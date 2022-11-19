type Props = {
  children?: React.ReactNode;
};
const Code: React.FC<Props> = ({ children }) => {
  return (
    <code className='mx-1 rounded-sm bg-gray-200 px-2 py-0.5 dark:bg-gray-700'>
      {children}
    </code>
  );
};

export default Code;
