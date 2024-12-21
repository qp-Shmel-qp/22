import React, { useEffect } from 'react';
import BookItem from './BookItem';
import AddBookForm from './AddBookForm';
import useLocalStorage from '../hooks/useLocalStorage';

const BookList = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    const addBook = (title) => {
        const newBook = { id: Date.now(), title, read: false };
        setBooks([...books, newBook]);
    };

    const toggleReadStatus = (id) => {
        const updatedBooks = books.map(book =>
            book.id === id ? { ...book, read: !book.read } : book
        );
        setBooks(updatedBooks);
    };

    const deleteBook = (id) => {
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const sortBooks = () => {
        const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
        setBooks(sortedBooks);
    };

    return (
        <div>
            <h1>Список книг</h1>
            <AddBookForm addBook={addBook} />
            <button onClick={sortBooks}>Сортировать книги</button>
            <ul>
                {books.map(book => (
                    <BookItem 
                        key={book.id} 
                        book={book} 
                        toggleReadStatus={toggleReadStatus} 
                        deleteBook={deleteBook} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default BookList;
