
// Item Component
export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
    return (
      <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        <input 
          type="checkbox" 
          checked={item.packed} 
          onChange={() => handleUpdateItem(item.id)} // Call handleUpdateItem with the item's id
        />
        {item.description} ({item.quantity}) 
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </li>
    );
  }