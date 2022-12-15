type Heading = {
  level: number;
  text: string;
};
const Heading: React.FC<Heading> = ({ level, text }) => {
  let padding = `pl-0`;
  switch (level) {
    case 3:
      padding = `pl-4`;
      break;
    case 4:
      padding = `pl-8`;
      break;
    case 5:
      padding = `pl-12`;
      break;
    case 6:
      padding = `pl-16`;
      break;
    default:
      padding = `pl-0`;
      break;
  }

  return (
    <li key={text} className={`py-1 text-sm leading-normal ${padding}`}>
      <a href={`#${text}`} className='hover:underline'>
        {text}
      </a>
    </li>
  );
};

type Props = {
  headings: Heading[];
};
const Toc: React.FC<Props> = ({ headings }) => {
  return (
    <nav className='sticky top-[65px] pt-10 md:top-[81px]'>
      <div className='rounded bg-white py-6 px-5 dark:bg-gray-900 '>
        <p className='mb-3 text-lg font-bold'>Table of Contents</p>
        <ul>
          {headings.map((heading) => (
            <Heading key={heading.text} {...heading} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Toc;
