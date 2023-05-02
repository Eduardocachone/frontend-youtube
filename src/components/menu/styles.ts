import styled from 'styled-components';


export const Container = styled.div <{Aberto: boolean}>`
    width: ${({Aberto})=> Aberto? '300px':'125px' };
    height: calc( 100vh - 55px) ;
    box-sizing: border-box;
    padding: 10px 10px 10px 0px;
    display:flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    position: sticky;
    top: 55px;

`;

export const ContainerItem = styled.div<{Aberto: boolean}>`
    width: 98%;
    min-height: ${({Aberto})=> Aberto? '45px':'80px' };
    border-radius:10px;
    cursor: pointer;
    padding: 2px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction:  ${({Aberto})=> Aberto? 'row':'column' };
    align-items: center;
    justify-content:  ${({Aberto})=> Aberto? 'none':'center' };
    margin: ${({Aberto})=> Aberto? '5px 0px 5px 20px':'none' } ;

    span{
        font-weight:  ${({Aberto})=> Aberto? '400':'400' };
        margin:  ${({Aberto})=> Aberto? '20px':'none' };
        font-size:  ${({Aberto})=> Aberto? '16px':'12px' };
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width:20px;
    
`;

export const Divaider = styled.div<{Aberto: boolean}>`
  padding: 0;
  width: ${({Aberto})=> Aberto? '100%':'none'};
  height: 0px;
  border: ${({Aberto})=> Aberto? '1px':'none'} solid #d3d3d3;
  margin: ${({Aberto})=> Aberto? '5px 0px' :'none'};
`;


export const TextLogin = styled.span<{Aberto: boolean}>`
display:  ${({Aberto})=> Aberto? 'inline-block':'none'} ;
width: 80%;
font-size: 18px

`;

export const ContainerLogin = styled.div<{Aberto: boolean}>`
    display:  ${({Aberto})=> Aberto? 'flex':'none'} ;
    width: 130px;
    height: 50px;
    border: 1px solid #d3d3d3;
    border-radius: 40px;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;
    cursor: pointer;
    margin: 15px 0;
    box-sizing: border-box;
  


    :hover{
        background-color:  #DEF1FF;
        border: 1px solid none;
    }
`;

export const ContainerItemMenu = styled.div<{Aberto: boolean}>`
    width: 98%;
    min-height: 40px;
    border-radius:10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display:  ${({Aberto})=> Aberto? 'flex':'none'} ;
    align-items: center;
    margin:5px 0px 5px 20px;
    

    
    span{
        font-weight: 400;
        margin: 20px;
        font-size: 16px;
        white-space: nowrap;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const SpanMenuContainer = styled.span<{Aberto: boolean}>`
    display:  ${({Aberto})=> Aberto? 'flex':'none'} ;
    width: 80%;
    font-size: 20px;
    font-weight: 400;
`;

export const SpanEndContainer = styled.span<{Aberto: boolean}>`
    display:  ${({Aberto})=> Aberto? ' inline-block':'none'};
    width: 100%;
    height: 250px;
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    margin:5px 0px 5px 20px;
    color: #606060;
`;

export const SpanDireitos = styled.span<{Aberto: boolean}>`
    display:  ${({Aberto})=> Aberto? ' inline-block':'none'} ;
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0px 10px 20px;
    white-space: nowrap;
    color: #AAAAAA;
`;
export const InscriçoesContainer  = styled.span <{Aberto: boolean}> `
    width: 98%;
    height: 40px;
    border-radius:10px;
    cursor: pointer;
    padding: 2px 20px;
    box-sizing: border-box;
    display:  ${({Aberto})=> Aberto? 'flex':'none'} ;


    :hover {
        background-color: #f2f2f2;
    }
    `;

export const InscriçoesContext = styled.span <{Aberto: boolean}> `
    display:  ${({Aberto})=> Aberto? ' inline-block':'none'} ;
    width: 100%;
    margin-left: 20%;
    font-size: 18px;
    font-weight: 400;
    margin-bottom:15px;
`;
export const ChannelInscriçao = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    margin-right:10px;
    background-color: grey;
    cursor: pointer;
    margin-top: 3px;

    span{
        font-weight: 400;
        margin: 20px;
        font-size: 17px;
        white-space: nowrap;
    }
`;







