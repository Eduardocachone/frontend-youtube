import { useContext, useState , useEffect} from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";


function Senha() {

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

  const {  handleLogin, logOut } = useContext(UserContext);
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const valor = localStorage.getItem("email");

  const click = () => {
    handleLogin(valor,password)
    navigate('/')
  }



  return (
    <div>
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => {click()}} >logar</button>
  
    </div>
  );
}

export default Senha;
