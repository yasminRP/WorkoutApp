import Item from "./Item.js";

// PackingList Component
export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item 
            key={item.id} 
            item={item} 
            handleDeleteItem={handleDeleteItem} 
            handleUpdateItem={handleUpdateItem} // Pass handleUpdateItem to Item
          />
        ))}
      </ul>
    </div>
  );
}