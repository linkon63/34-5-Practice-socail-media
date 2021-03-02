import logo from './logo.svg';
import './App.css';
import Userinfo from './Components/UsersInfoSection/Userinfo';
import userData from './FakeData/userData.json';
import { useEffect, useState } from 'react';

function App() {
  const [usersData, setUserData] = useState([]);
  useEffect(()=>{
      setUserData(userData);
  }, [])
  const handleBtnEvent = (usersData) => {
    console.log('btn click',usersData);
  };
  return (
    <div className="App">
      <Userinfo usersData = {usersData} handleBtnEvent= {handleBtnEvent} key={usersData.id}></Userinfo>
    </div>
  );
}

export default App;
