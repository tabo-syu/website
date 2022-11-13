type Props = {
  children: React.ReactNode;
};
const Panels: React.FC<Props> = (props) => {
  return (
    <div className='grid-rows grid grid-cols-3 gap-y-10 gap-x-7'>
      {props.children}
    </div>
  );
};

export default Panels;
