import React from "react"
import { css } from "@emotion/react"
import Navegacion from "./Navegacion"
import styled from "@emotion/styled";
import { Link } from "gatsby";

const LinkHome = styled(Link)`
   text-align: center;
   color: #fff;
   text-decoration: none;
   font-size: 3rem;
   font-weight: 700;
`;


const Footer = ({title}) => {
    const year = new Date().getFullYear();
  return (
   <>
      <footer
      css={css`
        background-color: rgba(44,62,80);
        padding: 1rem;
        margin-top: 5rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          color: #fff;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <LinkHome to={"/"}>
          Hotel Gatsby
        </LinkHome>
        {/* Navegacion */}
        <Navegacion />
      </div>

    </footer>
    <p
      css={
        css`text-align:center;
        background-color: rgb(33,44,55);
        color: #FFF;
        margin: 0;
        padding: 1rem;
      `}
      >{title} .Todos los derechos reservados &copy;{year}</p>
   </>
  )
}

export default Footer
