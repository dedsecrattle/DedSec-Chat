import Header from "../components/Header";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { IoLogOut } from "react-icons/io5";
import { Contacts } from "../components/Contacts";
import ChatBox from "../components/ChatBox";

export default function Home() {
  const { username, setId, setUsername } = useContext(UserContext);
  async function handleLogout() {
    await axios.get("http://localhost:3000/auth/logout", {
      withCredentials: true,
    });
    setUsername(null);
    setId(null);
  }
  return (
    <div className="flex flex-col gap-14 items-center font-poppins font-bold h-screen w-screen justify-center bg-slate-100">
      <Header />
      <p className="text-2xl font-bold">
        Hii {username}, Welcome to Dedsec Chat !
        <span className="animate-bounce">👋</span>
      </p>
      <div className="flex gap-4 h-full w-full bg-red-400 items-center justify-center">
        <Contacts />
        <ChatBox />
      </div>
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
