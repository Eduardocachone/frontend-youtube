import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display:flex;
align-items: center;
flex-direction: column;
margin: 10px;
overflow-x: hidden;

`;
export const ContainerVideos = styled.div <{Aberto: boolean}>`
  width: 100%;
  max-width: 2200px;
  display: grid;
  grid-template-columns:${({Aberto})=> Aberto? 'repeat(3,1fr)':'repeat(4,1fr)' };
  column-gap: 10px;
  row-gap: 50px;
  margin-top: 40px;

  @media only screen and (min-width: 1448px) {
    grid-template-columns:${({Aberto})=> Aberto? 'repeat(4,1fr)':'repeat(5,1fr)' };
  }

  @media only screen and (min-width: 1778px) {
    grid-template-columns:${({Aberto})=> Aberto? 'repeat(5,1fr)':'repeat(6,1fr)' };
  }

  @media only screen and (min-width: 2000px) {
    grid-template-columns:${({Aberto})=> Aberto? 'repeat(6,1fr)':'repeat(6,1fr)' };
  }
`;