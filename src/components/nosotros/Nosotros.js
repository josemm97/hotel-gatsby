import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {css} from '@emotion/react';
import styled from '@emotion/styled';


const Container = styled.main`
    padding-top:4rem ;
    width: 1200px;
    margin: 0 auto;
    width: 95%;
    @media (min-width: 768px){
    	display: grid;
        grid-template-columns:repeat(2, 1fr);
        gap: 5rem;
    }
    p{
        line-height: 2;
        padding: 0 5rem;
        text-align: justify;
    }
`;


const Nosotros = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData(width: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  `)
  const { titulo, imagen, contenido } = informacion.allDatoCmsPagina.nodes[0]
  const url = getImage(imagen)
  return (
    <>
      <h2 css={css`
      text-align: center;
      margin-top:4rem;

      `}
      >
      {titulo}</h2>
      <Container>
        <p>{contenido}</p>
        <GatsbyImage image={url} />
      </Container>
    </>
  )
}

export default Nosotros
