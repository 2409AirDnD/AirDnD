import { useState, useEffect } from "react";
import "../sidebar.css";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [equipmentList, setEquipmentList] = useState([]);
  const [filteredEquipment, setFilteredEquipment] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!showSidebar) return;

    const fetchEquipment = async () => {
      try {
        const response = await fetch("http://localhost:3000/equipment");
        const data = await response.json();
        setEquipmentList(data);
        setFilteredEquipment(data);
      } catch (err) {
        console.error("Error fetching equipment:", err);
      }
    };

    fetchEquipment();
  }, [showSidebar]);

  useEffect(() => {
    const filtered = equipmentList.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const description = item.description?.toLowerCase() || "";

      const matchesType = selectedType === "" || item.type === selectedType;
      const matchesSearch =
        name.includes(searchQuery.toLowerCase()) ||
        description.includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });

    setFilteredEquipment(filtered);
  }, [searchQuery, selectedType, equipmentList]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeDescription = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button onClick={() => setShowSidebar(false)}>Close Sidebar</button>
        <h3>Choose Equipment</h3>

        <input
          type="text"
          placeholder="Search equipment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="filter-buttons">
          <button
            className={selectedType === "" ? "active" : ""}
            onClick={() => setSelectedType("")}
          >
            All
          </button>
          <button
            className={selectedType === "Weapon" ? "active" : ""}
            onClick={() => setSelectedType("Weapon")}
          >
            Weapons
          </button>
          <button
            className={selectedType === "Armor" ? "active" : ""}
            onClick={() => setSelectedType("Armor")}
          >
            Armor
          </button>
          <button
            className={selectedType === "Tools" ? "active" : ""}
            onClick={() => setSelectedType("Tools")}
          >
            Tools
          </button>
        </div>

        <ul className="equipment-list">
          {Array.isArray(filteredEquipment) && filteredEquipment.length > 0 ? (
            filteredEquipment.map((item) => (
              <li
                key={item.id || item.name}
                onClick={() => handleItemClick(item)}
                style={{ cursor: "pointer" }}
              >
                <strong>{item.name || "Unnamed Item"}</strong>:{" "}
                {item.description
                  ? item.description.length > 50
                    ? `${item.description.slice(0, 50)}...`
                    : item.description
                  : "No description available"}
              </li>
            ))
          ) : (
            <p>No equipment available. Please try again later.</p>
          )}
        </ul>
      </div>

      {selectedItem && (
        <div className={`item-details ${selectedItem ? "open" : ""}`}>
          <button onClick={closeDescription}>X</button>
          <h4>{selectedItem.name}</h4>
          <p>{selectedItem.description || "No description available."}</p>
          {selectedItem.damage && <p>Damage: {selectedItem.damage}</p>}
          {selectedItem.armorClass && (
            <p>Armor Class: {selectedItem.armorClass}</p>
          )}
          {selectedItem.value && <p>Value: {selectedItem.value} gp</p>}
        </div>
      )}
    </>
  );
};

export default Sidebar;
