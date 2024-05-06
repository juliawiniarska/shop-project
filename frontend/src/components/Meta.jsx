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
<<<<<<< HEAD
  title: 'Witamy w Dolce',
  description: 'Sprzedajemy najlepsze słodycze z całego świata',
  keywords: 'slodycze, kupowanie słodyczy, tanie slodycze',
=======
  title: 'Welcome to Dolce',
  description: 'We sell the best candies from around the world',
  keywords: 'candies, buy candies, affordable candies',
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
};

export default Meta;