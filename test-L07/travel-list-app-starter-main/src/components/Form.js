import { useState } from "react";
// Form Component
export default function Form({ handleAddItems }) {
    const [description, setDescription] = useState(""); 
    const [quantity, setQuantity] = useState(1); 
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description.trim()) {
        alert("Please enter a valid description!"); // Ensure description is not null or empty
        return;
      }
  
      const newItem = {
        id: Date.now(), // Use current timestamp for a unique id
        description: description.trim(), // Trim any extra whitespace
        quantity: quantity,
        packed: false,
      };
  
      handleAddItems(newItem); // Use the handleAddItems function passed via prop
  
      // Reset the states to clear the form
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input 
          type="text" 
          placeholder="Item..." 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  