import React from 'react'; 
import { 
    Container, 
    ContainerItens,
    Itens,
    NavButtonLeft,
    NavButtonRight,
    ContainerNav,

 } from './Styled';

 interface IProprs{
    Aberto: boolean
}

function Categorias ({Aberto}: IProprs ){
    

    const scrollContainer = React.useRef<HTMLDivElement>(null);

const ScrollLeft = () => {
    if (scrollContainer.current) {
        scrollContainer.current.scrollLeft -= 200;
      }
};

const ScrollRight = () => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += 200;
        }
};
const ItemsName = [
    { name:'Tudo' },
    { name: 'jogos' },
    { name:'Ao-vivo' },
    { name:'sertanejo'  },
    { name: 'pop'},
    { name:  'funk'  },
    { name: 'pagode' },
    { name:    'rap' },
    { name:  'trap'},
    { name:   'danças' },
    { name: 'programaçáo'},
    { name: 'javascrip' },
    { name:  'react' },
    { name: 'nodejs' },
    { name: 'logica'},
    { name:  'sofware' },
    { name: 'hardwerw'},
    { name:  'notebook'},
    { name:'pc gamer' },
    { name: 'Noticias' },

]
    return(
    <Container Aberto={Aberto} >
        <ContainerNav>
            <NavButtonLeft Aberto={Aberto}  onClick={ScrollLeft}>{'<'}</NavButtonLeft>   
        </ContainerNav>

        <ContainerItens Aberto={Aberto} ref={scrollContainer}>
            {ItemsName.map((items) =>(

            <Itens key=
            {items.name}>
                    {items.name}
            </Itens>
            ))}
        </ContainerItens>

        <ContainerNav>

            <NavButtonRight Aberto={Aberto}  onClick={ScrollRight}>{'>'}</NavButtonRight>
        </ContainerNav>
    </Container>
)


        
   
}

export default Categorias;
