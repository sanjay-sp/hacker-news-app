import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';

const App = () => {
  return (
    <div className="App">
      <Router>
      <nav>Hacker News</nav>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/:id" element={<PostPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
