import VideoConponent from "../../components/VideoConponent/Videos";
import { ContainerVideos,Container} from "./staled";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import Categorias from "../../components/CategoriasConponent/Categorias";
import ShortsComponent from "../../components/ShortsComponent/Shorts";

function Home (){

    const { Aberto } = useContext(UserContext);

    return(

    <Container>
        <Categorias  Aberto={Aberto}/>
        <ContainerVideos  Aberto={Aberto} >


            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
            <VideoConponent/>
        </ContainerVideos>
    </Container>

    
    )
}

export default Home;