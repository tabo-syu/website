type Props = {
  children: React.ReactNode;
};
const Main: React.FC<Props> = (props) => {
  return (
    <main className='bg-white p-8 dark:bg-gray-900'>{props.children}</main>
  );
};

export default Main;
