import React from 'react';
import UseHabitaciones from '../../Hooks/useHabitaciones';
import { css } from '@emotion/react';
import Habitacion from './Habitacion';
import styled from '@emotion/styled';

const ContainerHab = styled.ul`
    max-width: 1000px;
    width: 95%;
    margin: 4rem auto 0 auto;
    @media (min-width: 768px){
    	display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 4rem;
    }
`;

const Habitaciones = () => {
    const habitaciones = UseHabitaciones();
    return (
        <>
         <h2
         css={
             css`
             padding-top: 4rem;
             text-align: center;
             font-size: 3rem;
             `
         }
         >Nuestras habitaciones</h2>
         <ContainerHab>
             {habitaciones.map((habitacion)=>(
                 <Habitacion habitacion={habitacion} key={habitacion.id} />
             ))}
         </ContainerHab>
            
        </>
    );
}

export default Habitaciones;
