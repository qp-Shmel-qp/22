import React from 'react';

const BookItem = ({ book, toggleReadStatus, deleteBook }) => {
    return (
        <li>
            <span style={{ textDecoration: book.read ? 'line-through' : 'none' }}>
                {book.title}
            </span>
            <button onClick={() => toggleReadStatus(book.id)}>
                {book.read ? 'Не прочитано' : 'Прочитано'}
            </button>
            <button onClick={() => deleteBook(book.id)}>Удалить</button>
        </li>
    );
};

export default BookItem;
