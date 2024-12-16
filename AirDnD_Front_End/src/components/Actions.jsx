const Actions = ({ actions }) => {
  return (
    <div>
      <h3>Available Actions:</h3>
      {actions.length > 0 ? (
        <ul>
          {actions.map((action) => (
            <li key={action.name}>
              {action.name} - Damage: {action.damage} ({action.weaponType})
            </li>
          ))}
        </ul>
      ) : (
        <p>No actions available.</p>
      )}
    </div>
  );
};

export default Actions;
