import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../Layout/Layout';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

export const query = graphql`
query($slug: String!){
  allDatoCmsHabitacion (filter:{slug:{eq:$slug}}){
  nodes{
   titulo
   contenido
    imagen{
       gatsbyImageData(layout: FULL_WIDTH, placeholder:BLURRED)
    }
  }
  }
}

`;


const HabitacionTemplete = ({data:{allDatoCmsHabitacion:{nodes}}}) => {
  console.log(nodes[0]);
  const {titulo, contenido, imagen} = nodes[0]
  console.log(titulo);
 
  return (
    <Layout>
      <main 
      css={css`
      margin: 0 auto;
      max-width: 1200px;
      width: 95%;
      `}
      >
      <h1
      css={css`
      text-align: center;
      `}
      >{titulo}</h1>
      <p>{contenido}</p>
      <GatsbyImage image={getImage(imagen)}/>
      </main>
    </Layout>
  );
}

export default HabitacionTemplete;
