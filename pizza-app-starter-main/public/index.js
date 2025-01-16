import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {pizzaData} from "./data.js";

function Header() {
  return (
    <h1 style={{ color: "orange", fontSize: "48px" }}>Andy's Pizza Co.</h1>
  );
}

function pizzaStock(){
  return(
    <p>
    !{pizzaData.soldOut} ? 'Sold Out' : 'Available'
    </p>
  );
}

function Pizza() {
  return (
    <div>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <h3>{pizzaData.name}</h3>
      <p>{pizzaData.ingredients}</p>
      <p>{pizzaData.price}</p>
      <pizzaStock/>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  );
}

function Order(){
  return(
    <h3>We're currently open</h3>

  )
}

function Footer() {
  const date = new Date();
  const hours = date.getHours();
  return (
    <footer className="footer">
      <h3>
        {hours >= 10 && hours < 22
          ? <Order/>
          : "Sorry, we're closed"}
      </h3>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
