import React, { useEffect, useState } from 'react';
import { getGenres, createGenre } from '../api/api.js';

export default function GenreList({ onSelectGenre }) {
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getGenres().then(data => {
      setGenres(Array.isArray(data) ? data : data.genres || []);
    });
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    if (!name) return;
    try {
      const g = await createGenre({ name });
      setGenres([...genres, g]);
      setName('');
    } catch (err) {
      console.error('Failed to create genre:', err);
      alert('Failed to create genre: ' + (err.message || 'Unknown error'));
    }
  }

  return (
    <div>
      <h3>Genres</h3>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>
            <button onClick={() => onSelectGenre(g.id)}>{g.name}</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New genre"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
