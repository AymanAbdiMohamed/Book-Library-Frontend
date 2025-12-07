import React, { useState, useEffect } from 'react';
import GenreList from '../components/GenreList.jsx';
import BookList from '../components/BookList.jsx';
import AddBookForm from '../components/AddBookForm.jsx';
import { getBooks, getBooksByGenre } from '../api/api.js';

export default function Home() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        getBooks().then(data => setBooks(Array.isArray(data) ? data : data.books || []));
    }, []);

    function onSelectGenre(id) {
        getBooksByGenre(id).then(data => setBooks(Array.isArray(data) ? data : data.books || []));
    }
    function onAdded(book) {
        setBooks((prev) => [...prev, book]);
    }
    return (
        <div style={{ display: 'flex', gap: '2rem',}}>
            <div style={{ width: 200}}>
                <GenreList onSelectGenre={onSelectGenre} />
            </div>
            <div style={{ flex: 1}}>
                <BookList books={books} />
                <AddBookForm onAdded={onAdded} />
            </div>
        </div>
    );
}