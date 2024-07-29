import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { username } = useContext(UserContext);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={username ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={username ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={username ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
