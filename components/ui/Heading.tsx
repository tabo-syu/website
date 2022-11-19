type Props = {
  id?: string;
  children?: React.ReactNode;
};

const assignId = (children: React.ReactNode) =>
  typeof children === 'string' ? children : undefined;

const H2: React.FC<Props> = ({ id, children }) => {
  return (
    <h2
      id={id ?? assignId(children)}
      className='mt-20 mb-8 border-b border-b-gray-400 pb-3 text-3xl font-bold first:mt-0'
    >
      {children}
    </h2>
  );
};

const H3: React.FC<Props> = ({ id, children }) => {
  return (
    <h3
      id={id ?? assignId(children)}
      className='mt-12 mb-6 text-2xl font-bold first:mt-0'
    >
      {children}
    </h3>
  );
};

const H4: React.FC<Props> = ({ id, children }) => {
  return (
    <h4
      id={id ?? assignId(children)}
      className='mt-8 mb-4 text-xl font-bold first:mt-0'
    >
      {children}
    </h4>
  );
};

const H5: React.FC<Props> = ({ id, children }) => {
  return (
    <h5 id={id ?? assignId(children)} className='text-lg font-bold first:mt-0'>
      {children}
    </h5>
  );
};

const H6: React.FC<Props> = ({ id, children }) => {
  return (
    <h6
      id={id ?? assignId(children)}
      className='text-base font-bold first:mt-0'
    >
      {children}
    </h6>
  );
};

export { H2, H3, H4, H5, H6 };
