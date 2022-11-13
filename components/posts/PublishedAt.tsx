type Props = {
  date: string;
};
const PublishedAt: React.FC<Props> = (props) => {
  const formatedDate = props.date.replaceAll('-', '/');

  return (
    <div className='mb-4 text-sm text-gray-400 decoration-gray-400'>
      <time className='pr-1' dateTime={props.date}>
        {formatedDate}
      </time>
      公開
    </div>
  );
};

export default PublishedAt;
