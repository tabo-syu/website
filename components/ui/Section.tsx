type Props = {
  children: React.ReactNode;
};
const Section: React.FC<Props> = ({ children }) => {
  return <section className='mb-8'>{children}</section>;
};

export default Section;
