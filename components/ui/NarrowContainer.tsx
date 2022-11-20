type Props = {
  children: React.ReactNode;
};
const NarrowContainer: React.FC<Props> = (props) => {
  return (
    <div className='mx-auto max-w-4xl'>
      <div className='min-h-[calc(100vh_-_77px_-_49px)] bg-white px-8 pt-20 pb-32 dark:bg-gray-900'>
        {props.children}
      </div>
    </div>
  );
};

export default NarrowContainer;
