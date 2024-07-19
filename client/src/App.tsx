import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoLogOut } from "react-icons/io5";

function App() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [id, setId] = useState("");

  async function handleLogout() {
    navigate("/login");
    await axios.get("http://localhost:3000/auth/logout", {
      withCredentials: true,
    });
    setUsername("");
    setId("");
  }
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/init", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.login) {
          setUsername(response.data.data.username);
          setId(response.data.data.id);
        } else {
          navigate("/login");
        }
      });
  }, [navigate]);

  return (
    <div className="flex flex-col gap-14 items-center font-poppins font-bold h-screen w-screen justify-center bg-slate-100">
      <Header />
      <p className="text-2xl font-bold">
        Hii {userName}, Welcome to Dedsec Chat !
        <span className="animate-bounce">👋</span>
      </p>
      <button
        className="flex items-center text-xl gap-4 bg-black text-white p-4 rounded-lg"
        onClick={handleLogout}
      >
        <IoLogOut />
        <p>Logout</p>
      </button>
    </div>
  );
}

export default App;
