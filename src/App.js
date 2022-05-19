import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/Pages/HomePage';
import PostPage from './components/Pages/PostPage';

const App = () => {
  return (
    <div className="App">
      <Router>
      <nav><a href='/'>Hacker News</a></nav>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/:id" element={<PostPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
