import { useEffect, useState } from 'react';
import Layout from './layout/layout'
import ChatPage from './pages/ChatPage'
import { mainUser } from './assets/constant';


// Fetch dummy data from constant files, mocking API call
const fetchDummyUserData = () => {
  return mainUser
};

function App() {
  const [userData, setUserData] = useState<User | null>(null);
  // mocking API call for user data
  useEffect(() => {
    const fetchedData = fetchDummyUserData();
    setTimeout(() => {
      setUserData(fetchedData);
    }, 400); // 1 second delay
  }, []);


  return (
    <Layout user={userData}>
      <ChatPage user={userData} />
    </Layout>
  )
}

export default App
