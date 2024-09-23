import { FC, useState } from "react";
import { mainUser } from '../assets/constant';  // Assuming this is where your dummy data is
import logo from '/logo.png';

type LoginProps = {
  onAuthenticated: (loginStatus: boolean, user: User) => void;
};

const Login: FC<LoginProps> = ({ onAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    // Check if fields are filled
    if (!username || !password) {
      setMessage('Please enter both username and password');
      return;
    }

    // Hardcoded credentials
    const validUsername = 'admin123@gmail.com';
    const validPassword = 'admin@123';

    // Verify credentials
    if (username === validUsername && password === validPassword) {
      const fetchedData = mainUser; // Fetch the dummy data (or user data)

      // Call the parent function to pass user data
      setTimeout(() => {
        onAuthenticated(true, fetchedData);
      }, 400);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex items-center justify-center w-full xlg:w-1/3">
        <div className="flex flex-col w-96 bg-white mx-auto p-5">
          <img src={logo} alt="logo" className="w-[60px] mx-auto mb-2" />
          <div className="text-2xl sm:text-4xl font-bold mb-4 mx-auto">Chat Web App</div>
          {message && <div className="text-center mb-4 p-2 bg-red-400 text-white rounded-lg">{message}</div>}
          <input
            type="text"
            className="input-form mb-2 p-2 w-full border border-gray-500 rounded-md"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="input-form mb-2 p-2 w-full border border-gray-500 rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="font-bold text-sm text-gray-500 mb-6">Forgot your password?</p>

          <button
            onClick={login}
            className="btn-block bg-[#484FA2] hover:bg-[#484FA2]/90 text-white text-lg font-semibold p-2 w-full rounded-md"
          >
            Log in
          </button>
          {/* Social Login Buttons */}
          <span className="font-bold mx-auto my-4">DEMO ACCOUNT</span>
          <div className="p-2 border-2 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer hover:bg-gray-100" onClick={() => { setUsername('admin123@gmail.com'); setPassword('admin@123'); }}>
            <p>admin123@gmail.com</p>
            <p>admin@123</p>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="font-bold text-sm mx-auto hover:text-[#484FA2] hover:cursor-pointer">
            <a href="https://github.com/nmthong226" target="_blank">@nmthong226</a>
          </span>
        </div>
      </div>
      <div className="max-xlg:hidden w-2/3 h-screen opacity-90 bg-blue-800" style={{ clipPath: "circle(100% at 100% 50%)" }}>
      </div>
    </div>
  );
};

export default Login;
