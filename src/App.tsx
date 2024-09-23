import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [userData, setUserData] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  // Check if the user is already authenticated by loading data from localStorage
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData);
      setUserData(parsedUserData);
      setAuthenticated(true);
    }
  }, []);

  const onAuthenticated = (loginStatus: boolean, user: User) => {
    setUserData(user);
    setAuthenticated(loginStatus);
    // Save user data in localStorage
    localStorage.setItem('userData', JSON.stringify(user));
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route 
          path="/login" 
          element={
            authenticated ? (
              <Navigate to="/chat" />
            ) : (
              <LoginPage onAuthenticated={onAuthenticated} />
            )
          }
        />
        {/* Protected Chat Route */}
        <Route
          path="/chat"
          element={
            authenticated ? (
              <Layout user={userData} setAuthenticated={setAuthenticated}>
                <ChatPage user={userData} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Default Route */}
        <Route path="*" element={<Navigate to={authenticated ? "/chat" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;