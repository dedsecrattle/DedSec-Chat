import { FormEvent, useRef, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    axios
      .post(
        "http://localhost:3000/auth/register",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then(() => navigate("/"));
  };

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-3xl font-extrabold">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen justify-center gap-16 bg-slate-100">
      <Header />
      <header className="text-2xl font-bold uppercase">Register</header>
      <form className="flex flex-col gap-10 w-1/4" onSubmit={handleRegister}>
        <input
          ref={usernameRef}
          type="text"
          placeholder="username"
          className="p-4 border border-slate-400 rounded-lg text-xl"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          className="p-4 border border-slate-400 rounded-lg text-xl"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md p-4 text-xl"
        >
          Register
        </button>
        <Link to="/login" className="text-xl text-center">
          Have an Account Already? Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
