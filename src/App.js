import React from "react";
import Authors from './components/authors/authors';
import Books from './components/books/books';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className="appTitle">Lib-IT</h1>
      <Authors />
      <Books />
    </div>
  );
}

export default App;
