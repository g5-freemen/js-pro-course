import React, {useContext} from 'react';
import Book from './Book';
import uuid from 'react-uuid';
import Context from '../Context.js';

export default function Books( { showAuthor } ) {
  let { books } = useContext(Context);

  return (
    <fieldset>
    <legend>Books List</legend>
    { books.length ? null : <p style={{fontWeight:'900'}}>No Books</p> }
    { books.map(item =>
      <Book key={uuid()} book={item} showAuthor={showAuthor} />
    ) }
    </fieldset>
  ) 
}