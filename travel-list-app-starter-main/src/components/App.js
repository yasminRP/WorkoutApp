import React, {useState} from 'react';
import Logo from './Logo';
// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Form() {
  const [description,setDescription]= useState("");
  const [quantity,setQuantity]= useState(1);
  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="text" placeholder="Item.." value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button type="submit">Add</button>
  
    </form>
  );
}

const Item = [
  {id}
]

function Item({item}){
  return(
    <li>{item.description} {item.packed && <p style="text-decoration:line-through">{item.description}</p>}</li>
  );
}



function PackingList({onDeleteItem}) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem}/>
        ))}
      </ul>
    </div>
  );
}


function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items,setItems]= useState("");

  function handleAddItems(f){
    

  }
  function handleDeleteItem(){
    return(
      <div>
          {items.filter(item => item.includes({id})).map(filteredItem => (
            <li>
               {filteredItem}
            </li>
            ))}
      </div>
    )
  }

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList onAddItem={handleAddItems} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
