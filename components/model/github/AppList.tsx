import { Repository } from '@/lib/github';
import App from './App';

type Props = {
  repos: Repository[];
};
const AppList: React.FC<Props> = ({ repos }) => {
  return (
    <section className='grid-rows grid gap-5 md:grid-cols-3'>
      {repos.map((repo) => (
        <App key={repo.url} repo={repo} />
      ))}
    </section>
  );
};

export default AppList;