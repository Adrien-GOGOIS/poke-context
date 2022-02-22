import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../App";

import "./Login.css";

function Login() {

  const userState = useContext(UserContext);

  // useHistory de react-router-dom
  const history = useHistory();

  // Librairies react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fonction onSubmit bouton formulaire
  const onSubmit = (data) => {
    console.log("Formulaire soumis", data)
    // Envoi l'utilisateur direct sur Home si formulaire valide :
    history.push('/');
    userState.setAuth();
    
  };

  // RENDER LOGIN
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {required: true,
          maxLength: 15})}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        {errors.username && <span>Please enter a valid username</span>}
        <input
          {...register("password", {required: true,
            maxLength: 6})}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && <span>Please enter a valid password</span>}
        {userState.isLogged ? (<button onClick={onSubmit}>Logout</button>) : (<button type="submit">Login</button>)}
        
      </form>
    </div>
  );
}

export default Login;
