import { useState } from 'react';
import axios from 'axios';

export default function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/users/',
        { name, email }
      );
      setMessage(`User ${response.data.name} created successfully!`);
      setName('');
      setEmail('');
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.detail || 'Failed to create user'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}>
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
      />
      <button type="submit" style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add User</button>
      {message && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
    </form>
  );
}