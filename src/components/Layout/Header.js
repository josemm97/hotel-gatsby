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


const Header = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 1rem;
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
    </header>
  )
}

export default Header
