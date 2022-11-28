import App from '@/components/model/github/App';
import Section from '@/components/ui/Section';
import { fetchPinnedRepositories } from '@/lib/github';
import { use } from 'react';

const AppList: React.FC = () => {
  const repos = use(fetchPinnedRepositories());

  return (
    <Section>
      <div className='grid-rows grid gap-5 md:grid-cols-3'>
        {repos.map((repo) => (
          <App key={repo.url} repo={repo} />
        ))}
      </div>
    </Section>
  );
};

export default AppList;
