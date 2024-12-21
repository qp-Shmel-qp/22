import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
    const [bookInput, setBookInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookInput.trim()) return;
        addBook(bookInput);
        setBookInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={bookInput} 
                onChange={(e) => setBookInput(e.target.value)} 
                placeholder="Введите название книги"
            />
            <button type="submit">Добавить книгу</button>
        </form>
    );
};

export default AddBookForm;
