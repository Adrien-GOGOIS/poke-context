import { useForm } from "react-hook-form";

import "./Login.css";

function Login() {
  // Librairies react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fonction onSubmit bouton formulaire
  const onSubmit = (data) => console.log("Formulaire soumis", data);

  // RENDER LOGIN
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          type="text"
          name="username"
          id="username"
          required
          maxLength={15}
          placeholder="Username"
        />
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
          required
          minLength={6}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
