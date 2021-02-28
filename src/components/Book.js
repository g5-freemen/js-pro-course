import React from 'react';
import uuid from 'react-uuid';

export default function Book(props) {
    const { showAuthor } = props;
    const { title, author, id, crossedOut } = props.data;
    const crossOut = props.onChange;

    let styles = {
      cross: {
        textDecoration: 'line-through',
        color: 'gray'
      }
    }

  return (
    <div key={uuid()} className='book-row' style={ crossedOut ? styles.cross : null } onClick={() => crossOut(id)}>
        <span className='book-title'> 
            { title }
        </span>
        { showAuthor ? <span className='book-author'>{author}</span> : null }
    </div>
  )
}