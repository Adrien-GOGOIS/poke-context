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
          {...register("username", {required: true,
          maxLength: 15})}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        {errors.username && <span>Please enter an username</span>}
        <input
          {...register("password", {required: true,
            maxLength: 6})}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && <span>Please enter a password</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
