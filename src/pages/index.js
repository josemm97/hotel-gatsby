import React from 'react';
import Layout from '../components/Layout/Layout';
import IndexMain from '../components/indexMain/IndexMain';
import Inicio from '../components/indexMain/Inicio';
import Habitaciones from '../components/indexMain/Habitaciones';

const index = () => {
  return (
    <Layout>
      <IndexMain />
      <Inicio />
      <Habitaciones />
    </Layout>
  );
}

export default index;
