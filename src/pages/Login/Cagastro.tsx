import { useContext, useState , useEffect} from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";


function Cadastro() {

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


  const {  handleCreate} = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() =>{handleCreate(name,email,password)}} >Criar</button>
        
    </div>
  );
}

export default Cadastro;
