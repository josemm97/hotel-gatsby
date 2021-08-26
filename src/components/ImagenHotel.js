import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 500px;
`
const TextoImagen = styled.div`
  height:100%;
  background-image: linear-gradient(to top, rgba(34, 49, 63, .9), rgba(34, 49, 63, .9));
  color:#fff;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  h1{
    font-size: 4rem;
    margin: 0;
    @media (min-width: 991.98px){
    	font-size: 2.6rem;
    }
  }
`;

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
      <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <TextoImagen>
          <h1>Bienvenido</h1>
          <p>El mejor hotel para sus vacaciones </p>
        </TextoImagen>
      </ImageBackground>
  )
}

export default ImagenHotel
