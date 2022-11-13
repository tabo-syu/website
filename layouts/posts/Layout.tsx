type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <div className='mx-auto max-w-6xl px-4'>
      <div className='bg-white px-10 pb-32 pt-16 dark:bg-gray-900'>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
