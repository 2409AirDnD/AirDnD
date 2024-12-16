import { useState } from "react";
import Sidebar from "./Sidebar";

const Inventory = (equipmentList, setEquipmentList) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [inventory, setInventory] = useState([]);

  const handleItemClick = (item) => {
    alert(`Selected: ${item.name}`);
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
      {showSidebar ? (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      ) : null}
    </>
  );
};

export default Inventory;
