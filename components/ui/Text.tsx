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

export { P, A };
