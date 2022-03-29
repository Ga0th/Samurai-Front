import React from 'react';
import HomePage from '../component/homepage';
import withWebLayout from '../component/layout/web/withWebLayout';
import { apiConfig } from '../utils/api';

const Index = () => {
  const getApi = async () => {
    await apiConfig.get('articles').then((response) => {
      console.log('response', response);
    }).catch((error) => {
      console.log('errorindex', error);
    });
  };

  React.useEffect(() => {
    getApi();
  });
  return (
    <>
      <HomePage />
    </>
  );
};

export default withWebLayout(Index);