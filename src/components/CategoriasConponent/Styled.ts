import styled from 'styled-components';


export const Container = styled.div<{Aberto: boolean}>`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  height: 60px;
  width: 100% ;
  justify-content: start;
  position: fixed;
  top: 55px;
  left: ${({Aberto})=> Aberto? '250px':'105px' };
`;




export const NavButtonLeft = styled.button <{Aberto: boolean}>`
  background-color: white;
  border: none;
  color: #ccc;
  font-size: 24px;
  cursor: pointer;
  position: fixed ; 
  width: 40px
  height: 40px;
  border-radius:50%;

  :hover {
        background-color: #f2f2f2;
    }
  
`;

export const NavButtonRight = styled.button <{Aberto: boolean}>`
  background-color: white;
  border: none;
  color: #ccc;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  position: fixed;
  left: 94%;

  width: 40px
  height: 40px;
  border-radius:50%;

  :hover {
        background-color: #f2f2f2;
    }
`;

export const ContainerNav = styled.div`
  background-color: white;
  width: 40px;
  height: 50px;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItens = styled.div<{Aberto: boolean}>`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: ${({Aberto})=> Aberto? '72%':'83%' };
  justify-content: space-between;
  overflow: hidden;
  margin-top:24px;
`;

export const Itens = styled.div`
  margin:1px 10px;
  font-weight: 400;
  font-size:17px;
  height: 20px;
  width: 100% ;
  background-color:#f2f2f2;
  padding: 3px;
  border-radius:7px;
  white-space: nowrap;
`;