import { FormEvent, useContext, useRef } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setUsername, setId } = useContext(UserContext);

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
      .then((data) => {
        setUsername(data.data.username);
        setId(data.data.id);
      });
  };

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
