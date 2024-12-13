import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Account = ({ userId }) => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userId);
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const getUserInfo = await response.json();
      setUserInfo(getUserInfo);
    };
    getInfo();
  }, []);

  return (
    <>
      <h1 id="account-header">Welcome back, {userInfo.username}! </h1>
      <div id="account-block">
        <h1>Account Information</h1>
        <h2>{userInfo.username}</h2>
        <h2>{userInfo.email}</h2>
        <img src={userInfo.avatar} height="350" width="250" />
        <h2></h2>
      </div>
    </>
  );
};

export default Account;
