import { useEffect, useState } from "react";
const Account = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch("http://localhost:3000/users/2");
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
        <h1>
          {userInfo.id}
          {userInfo.username}
          <img src={userInfo.avatar} height="350" width="250" />
        </h1>
      </div>
    </>
  );
};

export default Account;
