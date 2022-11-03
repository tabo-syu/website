type Props = {
  children: React.ReactNode;
};
const Main: React.FC<Props> = (props) => {
  return (
    <main className='min-h-[calc(100vh_-_77px_-_49px)] bg-white p-8 dark:bg-gray-900'>
      {props.children}
    </main>
  );
};

export default Main;
