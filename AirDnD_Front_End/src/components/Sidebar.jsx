const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? "show" : ""}`}>
      <h3>Choose Equipment</h3>
      {/* Future content for adding/searching equipment */}
      <button onClick={() => setShowSidebar(false)}>Close Sidebar</button>
    </div>
  );
};

export default Sidebar;
