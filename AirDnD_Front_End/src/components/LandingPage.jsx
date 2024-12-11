const LandingPage = () => {
  return (
    <>
    <h1 id="home-header"> Air DnD</h1>
    <div id="home-block">
    <img src = "src/assets/AirDnD.png" alt = "AirDnD logo"/>
    <h1 id="home-h1">Welcome to Air DnD</h1>
    <h4 className="home-h4">A lightweight Dungeons & Dragons character and campaign generator and manager.</h4>
    <h3 id="home-h3">What's New:</h3>
    <h4 className="home-h4">Version 0.7 (Alpha Release) is now live!</h4>
    <ul>
      <li>New users can create accounts.</li>
      <li>Existing users can log in.</li>
      <li>Any user can now create a character!</li>
      <li>Logged in users can now view their created characters</li>
      <li>Logged in users can now create campaigns an add other users to them.</li>
      <li>Logged in users can now view their campagins.</li>
    </ul>
    </div>
    </>
  )
}

export default LandingPage;