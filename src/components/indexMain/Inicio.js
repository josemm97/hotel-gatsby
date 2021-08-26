import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Contenedor  = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px){
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  }
  p{
    text-align: justify;
    line-height: 2;
    padding: 0 5rem;
  }
`;

function Inicio({inicio}) {
  const informacion = useStaticQuery(graphql`
  query {
    allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
      nodes {
        titulo
        contenido
        imagen {
            gatsbyImageData(
            width: 100
            placeholder: BLURRED
            forceBlurhash: true
            imgixParams: {borderRight: 10}
            layout: FULL_WIDTH
          )
        
        }
      }
    }
  }
  
    `)
    
  //   // ...GatsbyDatoCmsFluid
  const {titulo, contenido ,imagen} = informacion.allDatoCmsPagina.nodes[0];
  const imagenUrl  = getImage(imagen);
  return (
    <section>
      <h2 css={css`
      text-align: center;
      font-size: 4rem;
      margin-top: 3rem;
      `}
      
      >{titulo}</h2>
      <Contenedor>
          <p>{contenido}</p>
          <GatsbyImage image={imagenUrl}/>
      </Contenedor>
    </section>
  )
}


export default Inicio

