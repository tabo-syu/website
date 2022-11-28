import App from '@/components/model/github/App';
import Section from '@/components/ui/Section';
import { Repository } from '@/lib/github';

type Props = {
  repos: Repository[];
};
const AppList: React.FC<Props> = ({ repos }) => {
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
