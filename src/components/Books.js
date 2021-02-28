import React from 'react';
import Book from './Book';
import uuid from 'react-uuid';

export default function Books( { books, showAuthor, onChange } ) {

return (
  <fieldset>
  <legend>Books List</legend>
  { books.map(item =>
    <Book key={uuid()} data={item} showAuthor={showAuthor} onChange={onChange}/>
  ) }
  </fieldset>
) 
}