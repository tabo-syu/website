type Props = {
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({ children }) => {
  return (
    <table className='my-12 w-full table-auto text-left text-sm'>
      {children}
    </table>
  );
};

const THead: React.FC<Props> = ({ children }) => {
  return <thead className='bg-gray-300 dark:bg-gray-700'>{children}</thead>;
};

const Tr: React.FC<Props> = ({ children }) => {
  return (
    <tr className='border-b border-gray-300 dark:border-gray-200'>
      {children}
    </tr>
  );
};

const Th: React.FC<Props> = ({ children }) => {
  return <th className='py-2 px-6'>{children}</th>;
};

const Td: React.FC<Props> = ({ children }) => {
  return <td className='py-3 px-6'>{children}</td>;
};

export { Table, THead, Tr, Th, Td };
