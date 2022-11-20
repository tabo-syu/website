type Props = OgProps & TwitterProps;
const Head: React.FC<Props> = (props) => {
  const title = props.title ? `${props.title} - tabo-syu` : 'tabo-syu';

  return (
    <>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <title>{title}</title>
      <meta name='description' content={`${props.description}`} />
      <link rel='icon' href='/favicon.png' type='image/png' />

      <OG
        type={props.type}
        title={title}
        description={props.description}
        image={props.image}
      />
      <Twitter image={props.image} />
    </>
  );
};

type OgProps = {
  type: 'website' | 'blog' | 'article';
  title: string;
  description: string;
  image: string;
};
const OG: React.FC<OgProps> = (props) => {
  return (
    <>
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:type' content={props.type} />
      <meta property='og:url' content={process.env.domain} />
      <meta
        property='og:image'
        content={`${process.env.domain}${props.image}`}
      />
    </>
  );
};

type TwitterProps = {
  image: string;
};
const Twitter: React.FC<TwitterProps> = ({ image }) => {
  return (
    <>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@tabo_web' />
      <meta name='twitter:creator' content='@tabo_web' />
      <meta name='twitter:url' content={process.env.domain} />
      <meta name='twitter:image' content={`${process.env.domain}${image}`} />
    </>
  );
};

export default Head;
