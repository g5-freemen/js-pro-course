import './App.css';
import React, { useState } from 'react'
import Books from './components/Books.js'

export default function App() {
  let [ books, setBooks ] = useState( [
    { id: 0, author: 'J.R.R. Tolkien', title: 'The Lord of the Rings', crossedOut: false },
    { id: 1, author: 'Willian Golding', title: 'The Lord of the Flies', crossedOut: false },
    { id: 2, author: 'Eugeny Zamyatin', title: 'We', crossedOut: false },
    ] );
  
  let [ showAuthor, setShowAuthor ] = useState(true);

  function crossBook(id) {
    setBooks( books.map( item => {
        if (item.id === id) item.crossedOut = !item.crossedOut;
        return item;
    } ) )
  }

  return (
    <div className="App">
      <button className='author-toggle' onClick={ () => setShowAuthor(!showAuthor) }>
        { showAuthor ? "Hide authors" : "Show authors" }
      </button>
      <Books books={books} showAuthor={showAuthor} onChange={crossBook} />
    </div>
  );
}