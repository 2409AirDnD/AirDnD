import { useState } from "react";

const sampleItems = [
  { id: 1, name: "Sword", description: "A sharp steel sword", type: "Weapon" },
  {
    id: 2,
    name: "Shield",
    description: "A sturdy wooden shield",
    type: "Armor",
  },
  {
    id: 3,
    name: "Healing Potion",
    description: "Restores health",
    type: "Healing",
  },
  { id: 4, name: "Map", description: "A map to guide you", type: "Tool" },
];

const Inventory = () => {
  const [inventory, setInventory] = useState(sampleItems);

  const handleItemClick = (item) => {
    alert(`Selected: ${item.name}`);
  };

  return (
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
    </div>
  );
};

export default Inventory;
