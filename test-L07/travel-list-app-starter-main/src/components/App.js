import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

// App Component
function App() {
  const [items, setItems] = useState([]);

  // Function to add items to the list
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]); // Add the new item to the state
  }

  // Function to delete an item by id
  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); // Filter out the item with the matching id
  }

  function handleUpdateItem(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item // Toggle packed status
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} /> {/* Pass handleAddItems as prop */}
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} /> {/* Pass items and handleDeleteItem as props */}
      <Stats items={items}/>
    </div>
  );
}

export default App;
