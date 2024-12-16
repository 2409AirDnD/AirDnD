import { useEffect, useState } from "react";

const Account = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [campaigns, setCampaigns] = useState(null);
  const [newCampaignTitle, setNewCampaignTitle] = useState("");
  const [newCampaignDescription, setNewCampaignDescription] = useState("");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        const userInfo = await response.json();
        setUserInfo(userInfo);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfo();
  }, [userId]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/campaigns`);
        const allCampaigns = await response.json();
        setCampaigns(allCampaigns);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
  }, [campaigns]);

  const createCampaign = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newCampaignTitle,
          description: newCampaignDescription,
          DM: {
            connect: { id: userId }
          },
          characters: [
            {
              id: 2
            }
          ]
        })
      });
  
      if (!response.ok) {
        throw new Error('Campaign creation failed.');
      }
      
      setNewCampaignDescription("");
      setNewCampaignTitle("");
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
        <h2 id="character-campaign-list-header">Characters:</h2>
        <div id="users-characters-campaign-block">
        {userInfo.charactersheets && 
          userInfo.charactersheets.map((character) => (
            <section key={character.id} className="single-character-campaign-line">
              <h4 className="single-character-campaign-name">{character.characterName}</h4>
              <h4>Level {character.level} {character.race[0].name} {character.class[0].name}</h4>
            </section>))}
        </div>  
        <h2 id="character-campaign-list-header">Campaigns that you DM</h2>
        <div id="users-characters-campaign-block">
          {campaigns && 
          campaigns.map((campaign) => (
            <section key={campaign.id} className="single-character-campaign-line">
              <h4 className="single-character-campaign-name">Title: {campaign.name}</h4>
              <h4>Description: {campaign.description}</h4>
            </section>))}
        </div>    
        <form onSubmit={createCampaign}>
          <h4>Create a new campaign!</h4>
          <label>
            Campaign Title:
            <input
              type="text"
              value={newCampaignTitle}
              onChange={(e) => setNewCampaignTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <input
              id= "campaign-description-input"
              type="text"
              value={newCampaignDescription}
              onChange={(e) => setNewCampaignDescription(e.target.value)}
              required
              />
          </label>
          <button type="submit">Create Campaign</button>
        </form>
      </div>
    </>
  );
};

export default Account;