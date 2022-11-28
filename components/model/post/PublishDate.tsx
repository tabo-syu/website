import { format } from 'date-fns';

type Props = {
  date: string;
};
const PublishDate: React.FC<Props> = ({ date }) => {
  return (
    <p className='text-sm text-gray-400'>
      {`${format(new Date(date), 'yyyy/MM/dd')}`} 公開
    </p>
  );
};

export default PublishDate;
