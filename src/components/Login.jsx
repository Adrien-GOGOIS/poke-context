// Fonctions React :
import { useContext, useState } from "react";

// Librairies
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Context depuis App.js
import { UserContext } from "../App";
import { PokemonContext } from "../App";

// Style :
import "./Login.css";

function Login() {

  // Appel du context depuis App.js
  const userState = useContext(UserContext);
  const pokemonsState = useContext(PokemonContext)

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
    // Changement du context isLogged via fonction setAuth crée dans App.js avec useContext :
    userState.setAuth();
    // Vide le tableau de stockage des pokémons
    userState.cleanArray();

    // Si la checkbox est activée, on garde le username dans le local storage :
    if (rememberMe === true) {
      localStorage.setItem("username", data.username)
    }
  };

  // State remember pour rappel username et password utilisateur
  const [rememberMe, setRememberMe] = useState(false);

  // Fonction pour changement state remember :
  const handleChange = (e)=>{
  setRememberMe(e.target.checked)
  }


  // RENDER LOGIN
  return (
    <div>
      <h1>Login</h1>
      {/* Fonction soumission formulaire : */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {required: true,
          maxLength: 15})}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={localStorage.getItem("username")}
        />
        {/* Message d'erreur si input invalide : */}
        {errors.username && <span>Please enter a valid username</span>}
        <input
          {...register("password", {required: true,
            maxLength: 6})}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {/* Message d'erreur si input invalide : */}
        {errors.password && <span>Please enter a valid password</span>}
        <div className="container">
        <input {...register("checkbox")} type="checkbox" name="remember" value="remember" onChange={handleChange}/>
        <label for="remember" style={{color: "white"}}>Remember me</label>
        </div>
        
        {/* Render conditionnel du bouton selon connexion utilisateur grace au Context : */}
        {userState.isLogged ? 
        (<button onClick={onSubmit}>Logout</button>
        ) : (
        <button type="submit">Login</button>)}
        
      </form>
    </div>
  );
}

export default Login;
