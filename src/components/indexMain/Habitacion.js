import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgb(44, 62, 80, .85);
    width: 100%;
    display: block;
    color:#fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const Habitacion = ({habitacion}) => {
    const {titulo, contenido, imagen, slug} = habitacion;
    return (
        <div
        css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
        `}
        >
            <GatsbyImage image={getImage(imagen)} alt={titulo}/>
            <div css={css`
            padding: 2rem;
            p{
                text-align: justify;
            }
            `}>
            <h3
            css={css`
            font-size:3rem ;
            `}
            >{titulo}</h3>
            <p>{contenido}</p>
            <Boton to={slug}>Ver habitaciones</Boton>
            </div>
        </div>
    );
}

export default Habitacion;
