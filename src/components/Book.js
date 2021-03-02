import React, {useContext} from 'react';
import Context from '../Context.js';
import uuid from 'react-uuid';

export default function Book(props) {
    const { showAuthor } = props;
    const { title, author, id, crossedOut } = props.book;
    const { deleteBook, crossBook } = useContext(Context);

    let styles = {
      cross: {
        textDecoration: 'line-through',
        color: 'gray'
      }
    }

  return (
    <div className='book-shelf'>
      <div key={uuid()} className='book-row' style={ crossedOut ? styles.cross : null } onClick={crossBook.bind(null,id)}>
          <span className='book-title'> 
              { title }
          </span>
          { showAuthor ? <span className='book-author'>{author}</span> : null }
      </div>
      <button className='book-delBtn' onClick={deleteBook.bind(null,id)}>&times;</button>
    </div>
  )
}