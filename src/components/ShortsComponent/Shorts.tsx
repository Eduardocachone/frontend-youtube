import Bobe from '../../assets/Bobe-edites.png'
import { 

    Container, 
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
 } from './styled';

function ShortsComponent (){

    return(
        <Container>
            <ImageBanner src={Bobe}/>
            <TitleContainer>
                    <TextContainer>
                    <Title>Bobe-Edites</Title>
                    <TextCard>53 mil visualizações</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default ShortsComponent;
