import "./Signin.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import User from "../models/User";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fake-health-data-api.shrp.dev",
  timeout: 3000,
  headers: {},
});

function Signin() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  async function onSubmitSignInForm(data) {
    try {
      setLoading(true);
      const response = await axiosInstance.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        const aUser = new User(null, null, data.email);

        aUser.accessToken = response.data.data.access_token;
        aUser.refreshToken = response.data.data.refresh_token;
        aUser.expires = response.data.data.expires;

        const decodedPayload = jwt_decode(aUser.accessToken);

        aUser.id = decodedPayload.id;

        setLoading(true);
        const response2 = await axiosInstance.get(`/users/${aUser.id}`, {
          headers: { Authorization: `Bearer ${aUser.accessToken}` },
        });
        setLoading(false);

        if (response2.status === 200) {
          aUser.first_name = response2.data.data.first_name;
          aUser.last_name = response2.data.data.last_name;
          aUser.email = response2.data.data.email;
          aUser.status = response2.data.data.status;

          setError(false);
          setUser(aUser);
          reset();
        } else {
          setError(true);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  function onSignOut() {
    setUser(null);
    navigate("/connexion");
  }

  return (
    <div className="Signin">
      <h1 className="Signin-title">Connexion</h1>
      {loading === false && error === false && user !== null && (
        <p className="Signin-message">
          <b>
            {user.first_name} {user.last_name}
          </b>{" "}
          ({user.email}) est connecté
          <button onClick={() => onSignOut()} className="Signin-button">
            Se déconnecter
          </button>
        </p>
      )}
      {loading === true && <p className="Signin-message">Chargement...</p>}
      {error === true && <p className="Signin-message">Une erreur s'est produite</p>}
      {user === null && (
        <form onSubmit={handleSubmit(onSubmitSignInForm)}>
          <input
            placeholder="Adresse mail"
            type="email"
            {...register("email", { required: true })}
            className="Signin-input"
          />
          {errors.email && <span className="Signin-error">Ce champ est obligatoire</span>}

          <input
            type="password"
            placeholder="Mot de passe"
            {...register("password", { required: true })}
            className="Signin-input"
          />
          {errors.password && <span className="Signin-error">Ce champ est obligatoire</span>}

          <button type="submit" className="Signin-submit">
            Connexion
          </button>
          <br />
          <a href="/" className="Signin-link">Retour</a>
        </form>
      )}
    </div>
  );
}

export default Signin;