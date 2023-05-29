//importation des bibliothèques
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

//importation des fichiers
import "./Signup.css";
import User from "../models/User";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Gérer la soumission du formulaire ici
  };

  return (
    <div className="Signup">
      <h1 className="Signup-title">Création de compte</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Signup-field">
          <label className="Signup-label">Prénom</label>
          <input
            className="Signup-input"
            type="text"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="Signup-error">Ce champ est obligatoire</span>
          )}
        </div>

        <div className="Signup-field">
          <label className="Signup-label">Nom</label>
          <input
            className="Signup-input"
            type="text"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <span className="Signup-error">Ce champ est obligatoire</span>
          )}
        </div>

        <div className="Signup-field">
          <label className="Signup-label">Adresse mail</label>
          <input
            className="Signup-input"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="Signup-error">Ce champ est obligatoire</span>
          )}
        </div>

        <div className="Signup-field">
          <label className="Signup-label">Mot de passe</label>
          <input
            className="Signup-input"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="Signup-error">Ce champ est obligatoire</span>
          )}
        </div>

        <button className="Signup-submit" type="submit">
          Création de compte
        </button>

        <a className="Signup-link" href="/">
          Retour
        </a>
      </form>
    </div>
  );
}

export default Signup;