import { useState } from "react";
import Sidebar from "./Sidebar";

const Inventory = (equipmentList, setEquipmentList) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [inventory, setInventory] = useState([]);

  const handleItemClick = (item) => {
    alert(`Selected: ${item.name}`);
  };
  const addToInventory = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };
  return (
    <>
      <div id="inventory-block">
        <div id="inventory-header-and-button">
          <h2>My Inventory</h2>
          <button
            className=".add-equipment-btn"
            onClick={() => setShowSidebar(true)}
            >
            Add Equipment
        </button>
        </div>
        <div id="inventory-list">
          {inventory.map((item) => (
            <div
              key={item.id}
              id="inventory-item"
              onClick={() => handleItemClick(item)}
            >
              <h3>{item.name}</h3>
              {item.description
                ? item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description
                : item.armorClass || item.damage}
              <small>Type: {item.type}</small>
            </div>
          ))}
        </div>
      </div>
      {showSidebar ? (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          addToInventory={addToInventory}
        />
      ) : null}
    </>
  );
};

export default Inventory;
