import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Header from "./layout/header/Header";
import Main from "./layout/Main"
import Content from './articleComponent/Content'
import Footer from './layout/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import Article from "./articleComponent/articlePageContent/Article";
import configureStore from "./redux/store";
import {Provider} from 'react-redux'
import CssBaseline from "@material-ui/core/CssBaseline";


function App({store}) {
    return (
        <div className="App">
            <Provider store={store}>
                <CssBaseline/>
                <BrowserRouter>
                    <Header/>
                    <Main>
                        <Route exact path={"/"}>
                            <Content/>
                        </Route>
                        <Route path={"/blog/:id"}>
                            <Article store={store}/>
                        </Route>
                        {/*<FluidImage imgURL={`url(${backgroundImg})`}/>
            <Article content={articleContent}/> */}
                    </Main>
                    <Footer/>
                </BrowserRouter>
            </Provider>

        </div>

    );
}

export default App;
