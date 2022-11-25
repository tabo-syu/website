import { Repository } from '@/lib/github';

type Props = {
  repo: Repository;
};
const App: React.FC<Props> = ({ repo }) => {
  return (
    <article className='rounded-md border border-gray-400 dark:border-gray-700'>
      <a
        href={repo.url}
        target='_blank'
        rel='noreferrer'
        className='hover:underline'
      >
        <h3 className='px-3 py-2 text-lg font-bold md:p-4 md:text-xl'>
          {repo.name}
        </h3>
      </a>
      <p
        className='px-3 text-sm text-white md:px-4 md:py-1'
        style={{ background: repo.language.color }}
      >
        {repo.language.name}
      </p>
      <p className='p-3 text-xs leading-normal text-gray-500 dark:text-gray-400 md:px-4 md:py-3 md:text-sm'>
        {repo.description ? `${repo.description}` : 'No description.'}
      </p>
    </article>
  );
};

export default App;
