import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Header from "./layout/header/Header";
import SideBar from "./articleComponent/SideBar";
import Main from "./layout/Main"
import Content from './articleComponent/Content'
import FluidImage from "./layout/FluidImage";
import Footer from './layout/Footer'

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
const contentData=[
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
]
function App() {
  return (
    <div className="App">
        <Header/>
        <Main>
            <FluidImage/>
            <Content cateData={categoryData} contentData={contentData}/>
        </Main>
        <Footer/>
    </div>
  );
}

export default App;
