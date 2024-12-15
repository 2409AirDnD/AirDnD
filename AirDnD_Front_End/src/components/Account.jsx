import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Account = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        const getUserInfo = await response.json();
        setUserInfo(getUserInfo);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
  }, [userId]);

  console.log(userInfo);

  if (!userInfo) return <h4>Please wait a moment while we fetch your account data.</h4>

  return (
    <>
      <h1 id="account-header">Welcome back, {userInfo.username}!</h1>
      <div id="account-block">
        <h1>Account Information</h1>
        <div id="user-details">
          <h2>{userInfo.username}</h2>
          <img src={userInfo.avatar} alt="User Avatar" height="350" width="250" />
          <h2>{userInfo.email}</h2>
        </div>
        <h2 id="character-list-header">Characters:</h2>
        <div id="users-characters-block">
        {userInfo.charactersheets && 
          userInfo.charactersheets.map((character) => (
            <section key={character.id} className="single-character-line">
              <h4 className="single-character-name">{character.characterName}</h4>
              <h4>Level {character.level} {character.race[0].name} {character.class[0].name}</h4>
            </section>))}
        </div>        
      </div>
    </>
  );
};

export default Account;
