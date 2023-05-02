import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    ContainerLogin,
 } from './style';

import HanburguerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import Search from '../../assets/search.png'
import Michofone from '../../assets/Microphone.png'
import Video from '../../assets/Video.png'
import Sino from '../../assets/Sino.png'
import LoginItem from '../../assets/Login.png'
import pontos from '../../assets/tres pontos.png'
import  {useContext} from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/Login/Login';


function Header (){

const {Aberto, setAberto, login,user} = useContext(UserContext);

const navigate = useNavigate()

    return(
        <Container>
            <LogoContainer>
                <ButtonContainer margin='0 10px 0 10px' onClick={() => setAberto(!Aberto)}>
                    <ButtonIcon alt="" src={HanburguerIcon} />
                </ButtonContainer  >
                <img 
                    style={{cursor: 'pointer', width: '100px'}}
                    alt=""
                    src={Logo}
                    onClick={() => navigate('/')  }
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder= 'Pesquisar' />
                </SearchInputContainer>
            <SearchButton>
                <ButtonIcon alt="" src={Search} />
            </SearchButton>

            <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Michofone} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>

                {login? 
                <>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Video} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Sino} />
                </ButtonContainer>
                </>
                :
                <ButtonContainer margin='0 10px 0 10px'>
                    <ButtonIcon alt="" src={pontos} />
                </ButtonContainer>
                }

                {login? 
                <ButtonContainer margin='0 0 0 10px'>
                    {user.email && user.email.charAt(0)}
                </ButtonContainer>
                :
                <ContainerLogin onClick={() => navigate('/login')} >
                <ButtonIcon  alt='' src={LoginItem}  />
                <span style={{color:'#065FD4' }}>
                      Fazer login
                </span>
                </ContainerLogin>
                }
            </HeaderButton>


        </Container>
    );
}

export default Header;