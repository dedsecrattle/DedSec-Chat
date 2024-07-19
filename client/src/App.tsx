import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatBox from "./components/ChatBox";

function App() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("")
  const [id, setId] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/init", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.login) {
          setUsername(response.data.data.username)
          setId(response.data.data.id)
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
        Hii {userName} Welcome to Dedsec Chat !<span className="animate-spin">👋</span>
      </p>
    </div>
  );
}

export default App;
