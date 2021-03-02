import React, {useState} from 'react';

export default function AddBook({onAddBook}) {
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');

    function bookSubmit(event) {
        event.preventDefault();
        if (title.trim() && author.trim()) {
            onAddBook(title,author);
            setTitle('');
            setAuthor('');
        }
    }

    return (
        <form className='book-addForm' onSubmit={bookSubmit}>
            <input placeholder='Book Title' value={title} onChange={ev => setTitle(ev.target.value)} />
            <input placeholder='Book Author' value={author} onChange={ev => setAuthor(ev.target.value)}/>
            <button type='submit'>+</button>
        </form>
    )
}