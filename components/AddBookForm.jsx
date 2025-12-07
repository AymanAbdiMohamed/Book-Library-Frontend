import React, { useState, useEffect } from 'react';
import { createBook, getGenres } from '../api/api.js';

export default function AddBookForm({ onAdded }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [genreId, setGenreId] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then(data => {
      setGenres(Array.isArray(data) ? data : data.genres || []);
    }).catch(err => console.error('Failed to load genres:', err));
  }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      if (!genreId) {
        alert('Please select a genre');
        return;
      }
      const book = await createBook({
        title,
        author,
        pages: pages ? parseInt(pages) : null,
        genre_id: parseInt(genreId),
      });
      onAdded(book);
      setTitle('');
      setAuthor('');
      setPages('');
      setGenreId('');
    } catch (err) {
      console.error('Failed to create book:', err);
      alert('Failed to create book: ' + (err.message || 'Unknown error'));
    }
  }

  return (
    <form onSubmit={submit}>
      <h3>Add Book</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        placeholder="Pages"
      />
      <select
        value={genreId}
        onChange={(e) => setGenreId(e.target.value)}
        required
      >
        <option value="">Select genre</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <button>Add Book</button>
    </form>
  );
}
