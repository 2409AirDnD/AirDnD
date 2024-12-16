import { useState } from "react";
import Sidebar from "./Sidebar";

const Inventory = ({ inventory, equipItem, addToInventory }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleItemClick = (item) => {
    alert(`Selected: ${item.name}`);
  };

  const handleEquipItem = (item) => {
    equipItem(item);
  };
  return (
    <>
      <div id="inventory-block">
        <h2>My Inventory</h2>
        <div id="inventory-list">
          {inventory.map((item) => (
            <div
              key={item.id}
              id="inventory-item"
              onClick={() => handleItemClick(item)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <small>Type: {item.type}</small>
              <button onClick={() => handleEquipItem(item)}>Equip</button>
            </div>
          ))}
        </div>
        <button
          className="add-equipment-btn"
          onClick={() => setShowSidebar(true)}
        >
          Add Equipment
        </button>
      </div>
      {showSidebar && (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          addToInventory={addToInventory}
        />
      )}
    </>
  );
};

export default Inventory;
