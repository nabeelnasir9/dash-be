import { useContext } from "react";
import { AuthContext } from "../../config/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn, username, setUsername, password, setPassword } =
    useContext(AuthContext);
  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="w-screen flex items-center bg-slate-200 justify-center h-screen">
      <div className="flex flex-col gap-4 p-10 rounded-xl bg-white/50 shadow-lg shadow-black items-center justify-center">
        <h1 className="text-5xl pb-10 font-semibold">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-white rounded-xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
