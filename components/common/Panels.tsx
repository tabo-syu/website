type Props = {
  children: React.ReactNode;
};
const Panels: React.FC<Props> = (props) => {
  return (
    <div className='grid-rows grid gap-y-10 gap-x-7 md:grid-cols-3'>
      {props.children}
    </div>
  );
};

export default Panels;
