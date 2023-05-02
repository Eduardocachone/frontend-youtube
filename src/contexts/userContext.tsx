import { createContext, useState, useEffect } from "react";
import api from "../api";
import Header from "../components/header";
import Menu from "../components/menu";

export const UserContext = createContext({} as any);

export const UserStore = ({ children }: { children: React.ReactNode }) => {
  const [Aberto, setAberto] = useState(true);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') as string);
  const [headerconponent, setHeaderconponent] = useState(true);
  const [menuconponent , setMenuconponent] = useState(true);

 


  const getUser = (token: string) => {
    api.get('/user/get-user', { headers: { Authorization: token } })
      .then(({ data }) => {
        setUser(data.user);
        setLogin(true);
      })
      .catch((error) => {
        console.log('Usuário não encontrado', error);
      });
  }

  useEffect(() => {
      getUser(token);
  }, [token])

  


  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
  };
  


  const handleLogin = (email:any, password: any) => {
    api.post("/user/sign-in", { email, password }).then(({ data }) => {
      setLogin(true);
      localStorage.setItem('token', data.token)
      setToken(data.token)
      getUser(data.token);
    }).catch((error) => {
      console.log('Usuário não encontrado', error);
    });
  };

  const handleCreate = ( name:any, email:any, password: any) => {
    api.post("/user/sign-up", {  name, email, password }).then(() => {
      console.log('Usuario criado com suceso')

    }).catch((error) => {
      console.log('Usuário não criado', error);
    });
  };


  return (
    <UserContext.Provider
      value={{
        Aberto,
        setAberto,
        user,
        login,
        handleLogin,
        logOut,
        handleCreate,
        Header,
        headerconponent,
        setHeaderconponent,
        menuconponent,
        setMenuconponent,
        Menu
            }}
    >
      {children}
    </UserContext.Provider>
  );
};
