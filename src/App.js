import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./layout/header/Header";
import CustomizedMenus from './layout/header/Dropdown'
import SideBar from "./layout/sideBar/SideBar";

const categoryData=[
    {
        title: "Algorithm",
        nextLevelData:["BFS", "DFS", "LinkedList"]
    },
    {
        title: "Backend",
        nextLevelData: ["Java", "Spring", "Distributed System"]
    }
]
function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar cateData={categoryData}/>
    </div>
  );
}

export default App;
