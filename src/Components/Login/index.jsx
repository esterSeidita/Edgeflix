import React, { useState } from "react";
import { signIn } from "../../libs/firebaseAuth";
import style from "./Login.module.scss";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
    
  const handleLogin =(e) => {
    e.preventDefault();    
    signIn(user, true, dispatch);
  };

  return (
    <>
      <div className={style.login}>
        <form onSubmit={handleLogin}>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="email"
          />
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="password"
          />
          <button>Accedi</button>
        </form>
        <button>Esci</button>
        <h3>
          Non hai un account ? <a href="/signup">Registrati</a>{" "}
        </h3>
      </div>
    </>
  );
};

export default Login;
