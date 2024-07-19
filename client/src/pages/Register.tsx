import { FormEvent, useRef } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    console.log(usernameRef.current?.value);
    console.log(passwordRef.current?.value);
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
