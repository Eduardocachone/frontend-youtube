import { useState , useEffect ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/userContext';

import Google from '../../assets/Google.png'

import {
  Page,
  Container,
  Styles,
  Styles2,
  Styles3,
  Styles4

} from './styled'

function Email() {

  const { setHeaderconponent , setMenuconponent} = useContext(UserContext);



    useEffect(() => {
      setHeaderconponent(false);

      return () => {
        setHeaderconponent(true);
      };
    }, []); 

    useEffect(() => {
      setMenuconponent(false);

      return () => {
        setMenuconponent(true);
      };
    }, []); 

    const navigate = useNavigate()
    const [email, setEmail] = useState("");

    const [mensagem, setMensagem] = useState("");

  const handleSaveClick = (event:any) => {
    localStorage.setItem("email", email);
    event.preventDefault();

    if (!email) {
      setMensagem("Digite um e-mail ou numero de telefone");
      return;
    }

    setMensagem(""); 
    navigate('/senha')
  };

  const url = 'https://support.google.com/chrome/answer/6130773?hl=pt'

  

  return (
  <Page>

    <Container>
      <Styles>
      <img className="Imagen" alt="" src={Google} />
      <span className="fazerlogin">Fazer login</span>
      <span className="textadd">Prosseguir no YouTube</span>

      <input className="enviar" placeholder="E-mail ou telefone" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
      </Styles>

      <Styles2>
        <p className="erro" >{mensagem}</p>
        <span className="esqueceu"  >Esqueceu seu e-mail?</span>
      </Styles2>
      <Styles3>
      <span className="sabermais" >Não está no seu computador? Use o modo visitante para fazer login com privacidade.</span> 
      <span className="clikavel" onClick={() => window.open(url, '_blank')} >Saiba mais</span>
      </Styles3>

      <Styles4>
      <span className="cadastro" onClick={() => {navigate('/cadastro')}} >Criar conta</span>
      <button className="proximo" type="submit" onClick={handleSaveClick}>Proximo</button>
      </Styles4>
    </Container>
  </Page>
  );
}

export default Email;
