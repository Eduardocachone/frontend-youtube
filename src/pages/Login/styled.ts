import styled from 'styled-components';

export const Page = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


export const Container = styled.header`
    padding: 0;
    width: 450px;
    height: 550px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    
`;


export const Styles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.Imagen{
    width: 100px;
    margin: 30px 0 10px 0;
}

.fazerlogin{
    font-size: 27px;
    font-weight: 450;
}
.textadd{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 400;
}
.enviar{
    margin-top: 25px;
    height: 45px;
    width: 350px;
    border-radius: 3px;
    border: 1px solid #d3d3d3 ;
}
`;

export const Styles2 = styled.div`
display: flex;
flex-direction: column;
.esqueceu{

    margin-left: 45px; 
    color: #065FD4;
    font-weight: 500;
    cursor: pointer;
}

.erro{
    margin-left: 45px; 
    color:red ;
    font-size: 13px;
}


`;

export const Styles3 = styled.div`
 margin-left: 45px;
 margin-top: 50px;
.sabermais{
    color: gray;
}
.clikavel{
    color: #065FD4;
    font-weight: 500;
    cursor: pointer;
}
`;

export const Styles4 = styled.div`

 margin-top: 50px;
 display: flex;
 justify-content: space-around;

.cadastro{
    color: #065FD4;
    font-weight: 500;
    cursor: pointer;
}
.proximo{
    background-color: #065FD4;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 35px;
    color: #f2f2f2;
}
`;

