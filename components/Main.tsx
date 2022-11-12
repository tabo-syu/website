type Props = {
  children: React.ReactNode;
};
const Main: React.FC<Props> = (props) => {
  return (
    <main className='min-h-[calc(100vh_-_77px_-_49px)] bg-white px-8 pt-20 pb-32 dark:bg-gray-900'>
      {props.children}
    </main>
  );
};

export default Main;
