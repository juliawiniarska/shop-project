import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Witamy w Dolce',
  description: 'Sprzedajemy najlepsze słodycze z całego świata',
  keywords: 'slodycze, kupowanie słodyczy, tanie slodycze',
};

export default Meta;