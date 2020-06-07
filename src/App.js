import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Header from "./layout/header/Header";
import Main from "./layout/Main"
import Content from './articleComponent/Content'
import Footer from './layout/Footer'
import { BrowserRouter, Route} from 'react-router-dom'
import Article from "./articleComponent/articlePageContent/Article";



function App() {
  return (
    <div className="App" >
        <Header/>
        <Main>
            <BrowserRouter>
                <Route exact path={"/"} component={Content}/>
                <Route path={"/blog/:title"} component={Article} />
            </BrowserRouter>
            {/*<FluidImage imgURL={`url(${backgroundImg})`}/>
            <Article content={articleContent}/> */}
        </Main>
        <Footer/>
    </div>
  );
}

export default App;
