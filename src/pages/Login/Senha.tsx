import { useContext, useState , useEffect} from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";


function Senha() {

  const { setHeaderconponent , setMenuconponent, login} = useContext(UserContext)
  
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

  const {  handleLogin } = useContext(UserContext);

  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  

  const Email = localStorage.getItem("email");



  const handlelogar = (event:any) => {
    event.preventDefault();

    handleLogin(Email,password)
    if (login) {   
      navigate('/')
    }

  };


  return (
    <div>

      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handlelogar} >logar</button>
  
    </div>
  );
}

export default Senha;
