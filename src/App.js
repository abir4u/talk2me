import React from "react";
import "./App.css";
import UserList from "./components/userlist";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserList />
      <div style={{ flexGrow: 1 }}></div>
    </div>
  );
}

export default App;
