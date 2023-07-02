import React from 'react';
import styles from './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/home-page/home";
import BlogPage from "../../pages/blog-page/blog-page";

const App = () => {
  return (
    <div className={styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/blog'} element={<BlogPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
