import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/init", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.login) {
          navigate("/");
        } else {
          navigate("/login");
        }
      });
  }, [navigate]);

  return (
    <div className="flex flex-col gap-14 items-center font-poppins font-bold h-screen w-screen justify-center bg-slate-100">
      <Header />
      <p className="text-2xl font-bold">
        Welcome to Dedsec Chat !<span className="animate-spin">👋</span>
      </p>
    </div>
  );
}

export default App;
