type Props = {
  children?: React.ReactNode;
};

const Ul: React.FC<Props> = ({ children }) => {
  return <ul className='mb-8 list-disc pl-6'>{children}</ul>;
};

const Ol: React.FC<Props> = ({ children }) => {
  return <ol className='mb-8 list-decimal pl-6'>{children}</ol>;
};

const Li: React.FC<Props> = ({ children }) => {
  return <li className='leading-loose'>{children}</li>;
};

export { Ul, Ol, Li };
