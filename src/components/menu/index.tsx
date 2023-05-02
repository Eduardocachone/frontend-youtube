import MenuIten from '../../assets/Inicio.png'
import ShortsItem from '../../assets/Shorts.png'
import IscricaoItem from '../../assets/Inscriçoes.png'
import BibliotecaItem from '../../assets/Biblioteca.png'
import HistoricosItem from '../../assets/Historicos.png'
import LoginItem from '../../assets/Login.png'
import EmAuta from '../../assets/Auta.png'
import Shopping from '../../assets/Shopping.png'
import Musica from '../../assets/Musica.png'
import Filme from '../../assets/Filme.png'
import AoVivo from '../../assets/Ao-vivo.png'
import Jogos from '../../assets/Jogos.png'
import Noticias from '../../assets/Noticias.png'
import Esportes from '../../assets/Esportes.png'
import Aprender from '../../assets/Aprender.png'
import Procurarcanais from '../../assets/MaisCanais.png'
import Premium from '../../assets/Premimhum.png'
import Misic from '../../assets/Muisic.png'
import Kids from '../../assets/Kids.png'
import Configuraçoes from '../../assets/Configuraçoes.png'
import Denuncia from '../../assets/Denuncia.png'
import Ajuda from '../../assets/Ajuda.png'
import Fedback from '../../assets/Fedback.png'

import { 
    Container, 
    ContainerItem,
    ButtonIcon,
    Divaider,
    TextLogin,
    ContainerLogin,
    ContainerItemMenu,
    SpanMenuContainer,
    SpanEndContainer,
    SpanDireitos,
    InscriçoesContext,
    ChannelInscriçao,
    InscriçoesContainer

 } from './styles';
import { useNavigate } from 'react-router'
import  {useContext} from 'react';
import { UserContext } from '../../contexts/userContext';
 
 interface IProprs{
    Aberto: boolean
}

function Menu ({Aberto}: IProprs ){
      const {login,user} = useContext(UserContext);
      const navigate = useNavigate()

    return(
      
      <Container Aberto={Aberto} >
            <ContainerItem onClick={() => navigate('/')  }  Aberto={Aberto} >
                  <ButtonIcon alt="" src={MenuIten} />
                  <span >Inicio</span>
            </ContainerItem>

            <ContainerItem onClick={() => navigate('/shorts')  } Aberto={Aberto} >
                  <ButtonIcon alt="" src={ShortsItem} />
                  <span >Shorts</span>
            </ContainerItem>

            <ContainerItem onClick={() => navigate('/inscriçoes')  } Aberto={Aberto} >
                  <ButtonIcon alt="" src={IscricaoItem} />
                  <span>Inscrições</span>
            </ContainerItem>

                  <Divaider  Aberto={Aberto} > </Divaider>

            <ContainerItem onClick={() => navigate('/biblioteca')  } Aberto={Aberto} >
                  <ButtonIcon alt="" src={BibliotecaItem} />
                  <span>Biblioteca</span>
            </ContainerItem>

            <ContainerItem onClick={() => navigate('/histiorico')} Aberto={Aberto} >
                  <ButtonIcon alt="" src={HistoricosItem} />
                  <span>Historicos</span>
            </ContainerItem> 

                  <Divaider Aberto={Aberto} > </Divaider>
                    
           
 
            {login?
            <> 
            <InscriçoesContext Aberto={Aberto} >Inscrições</InscriçoesContext>
            <InscriçoesContainer Aberto={Aberto} >
                  <ChannelInscriçao>A</ChannelInscriçao>
                  <span>Ana Castelo</span>
            </InscriçoesContainer>
            <InscriçoesContainer Aberto={Aberto} >
                  <ChannelInscriçao>P</ChannelInscriçao>
                  <span>Paulo</span>
            </InscriçoesContainer>
            <InscriçoesContainer Aberto={Aberto} >
                  <ChannelInscriçao>H</ChannelInscriçao>
                  <span>Henrique</span>
            </InscriçoesContainer>
            <InscriçoesContainer Aberto={Aberto} >
                  <ChannelInscriçao>J</ChannelInscriçao>
                  <span>Juliano</span>
            </InscriçoesContainer>
            </>
           
            :
            <>
             <TextLogin  Aberto={Aberto} >
                      Faça login para curtir vídeos, comentar e se inscrever.
            </TextLogin>

            <ContainerLogin onClick={() => navigate('/login')} Aberto={Aberto} >
                  <ButtonIcon  alt='' src={LoginItem}  />
                  <span style={{color:'#065FD4' }}>
                        Fazer login
                  </span>
            </ContainerLogin>
            </>
            
      }
     
                     <Divaider  Aberto={Aberto} > </Divaider>

            <SpanMenuContainer  Aberto={Aberto}>
               Explorar
            </SpanMenuContainer>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={EmAuta} />
                  <span>Em Auta</span>
            </ContainerItemMenu>
                  
            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Shopping} />
                  <span>Shopping</span>
            </ContainerItemMenu>
          
            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Musica} />
                  <span>Musicas</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Filme} />
                  <span>Filmes</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto} >
                  <ButtonIcon alt="" src={AoVivo} />
                  <span>Ao-vivo</span> 
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Jogos} />
                  <span>Jogos</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Noticias} />
                  <span>Noticias</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Esportes} />
                  <span>Exportes</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Aprender} />
                  <span>Aprender</span>
            </ContainerItemMenu>

                  <Divaider  Aberto={Aberto} > </Divaider>


            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Procurarcanais} />
                  <span>Procurar canais</span>
            </ContainerItemMenu>

                  <Divaider  Aberto={Aberto} > </Divaider>

            <SpanMenuContainer  Aberto={Aberto}>
                  Mais do YouTube
            </SpanMenuContainer>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Premium} />
                  <span>YouTube premium</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Misic} />
                  <span>YouTube muisic</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Kids} />
                  <span>YouTube kids</span>
            </ContainerItemMenu>

                  <Divaider  Aberto={Aberto} > </Divaider>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Configuraçoes} />
                  <span>Configurações</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Denuncia} />
                  <span>Historico de denuncia</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Ajuda} />
                  <span>Ajuda</span>
            </ContainerItemMenu>

            <ContainerItemMenu Aberto={Aberto}>
                  <ButtonIcon alt="" src={Fedback} />
                  <span>Enviar feedback</span>
            </ContainerItemMenu>

                  <Divaider  Aberto={Aberto} > </Divaider>
            
            <SpanEndContainer Aberto={Aberto}>
            Sobre Imprensa<br/>Direitos autorais<br/>Entre em contato<br/>Criadores de conteúdo<br/>Publicidade Desenvolvedores<br/>
            <br/>
            Termos Privacidade<br/>Política e segurança<br/>Como funciona o YouTube<br/>Testar os novos recursos
            </SpanEndContainer>
            
            <SpanDireitos Aberto={Aberto}>
            © 2023 Eduardo Cachone
            </SpanDireitos>

      </Container>
    );
}

export default Menu;

