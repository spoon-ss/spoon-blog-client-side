import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Header from "./layout/header/Header";
import Main from "./layout/Main"
import Content from './page/article-overview-page/Content'
import Footer from './layout/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import Article from "./page/article-detail-page/Article";
import {Provider} from 'react-redux'
import CssBaseline from "@material-ui/core/CssBaseline";


function App({store}) {
    return (
        <div className="App">
            <Provider store={store}>
                <CssBaseline/>
                <BrowserRouter forceRefresh={true}>
                    <Header/>
                    <Main>
                        <Route exact path={"/"}>
                            <Content/>
                        </Route>
                        <Route path={"/blog/:id"}>
                            <Article/>
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
