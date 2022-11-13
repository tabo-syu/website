type Props = {
  children: string;
};
const Heading: React.FC<Props> = (props) => {
  return (
    <h1 className='mb-8 border-b border-b-gray-400 pb-3 text-3xl font-bold'>
      {props.children}
    </h1>
  );
};

export default Heading;
