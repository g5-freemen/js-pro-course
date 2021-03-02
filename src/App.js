import './App.css';
import React, { useState } from 'react';
import Context from './Context.js';
import Books from './components/Books.js';
import uuid from 'react-uuid';

export default function App() {
  const AddBook = React.lazy(()=> import('./components/AddBook.js'));

  let [ books, setBooks ] = useState( [
    { id: uuid(), author: 'J.R.R. Tolkien', title: 'The Lord of the Rings', crossedOut: false },
    { id: uuid(), author: 'Willian Golding', title: 'The Lord of the Flies', crossedOut: false },
    { id: uuid(), author: 'Eugeny Zamyatin', title: 'We', crossedOut: false },
    ] );
  
  let [ showAuthor, setShowAuthor ] = useState(true);

  function crossBook(id) {
    setBooks( books.map( item => {
        if (item.id === id) item.crossedOut = !item.crossedOut;
        return item;
    } ) )
  }

  const deleteBook = (id) => setBooks( books.filter( item => item.id !== id ) );

  const addBook = (title,author) => setBooks( books.concat( { id: uuid(), author, title, crossedOut: false } ) )

  return (
    <Context.Provider value={{ books, deleteBook, crossBook } }>
      <div className="App">
        <button className='author-toggle' onClick={ setShowAuthor.bind(null,!showAuthor) }>
          { showAuthor ? "Hide authors" : "Show authors" }
        </button>
        <Books showAuthor={showAuthor} />
        <React.Suspense fallback={'AddBook loading...'}>
          <AddBook onAddBook={addBook} />
        </React.Suspense>
      </div>
    </Context.Provider>
  );
}