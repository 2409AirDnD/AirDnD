import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Account = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const getUserInfo = await response.json();
      setUserInfo(getUserInfo);

      //Do a fetch on the auth api route?
      //useState where useState(false)
      //have to fetch the token from the auth route, not stored locally
      //const authResponse = await fetch("http://localhost:3000/auth");
      //use params to get the id so i don't have to hardcode the userid
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
//they need to be logged into so the users can only see their own info
//so Auth needs to be passed in so they're Id is passed into the fetch request
//url so they can only see their own info and not have to be hardcoded
//authorization bearer token?
export default Account;
