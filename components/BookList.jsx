import React from 'react';

export default function BookList({ books }) {
    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} - {book.author} {book.pages ? `(${book.pages} pages)` : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
}
