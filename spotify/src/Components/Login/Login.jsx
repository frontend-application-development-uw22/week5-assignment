import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <a className="login__link" href="http://localhost:8000/authorize">
        Login to Spotify
      </a>
    </div>
  );
}
