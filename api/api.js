// base URL for the backend API
const API = 'http://127.0.0.1:8000'; 

//  fetch all genres from the backend
export async function getGenres() {
    const res = await fetch(`${API}/genres/`);
    return res.json();
}

//  Genres API
//  create a new genre (expects: { name: "GenreName" })
export async function createGenre(data) {
    const res = aait fetch(`${API}/genres/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

// Books API
// fetch all books
export async function getBooks() {
    const res = await fetch(`$API}/books/`);
    return res.json();
}

// fecth books filtered by a specific genre ID
export async function getBooksByGenre(id) {
    const res = await fetch(`${API}/books/genre/${id}`);
    return res.json();
}

// create a new book (expects: { title, author, genre_id, nn})
export async function createBook(data) {
    const res = await fetch(`${API}/books/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

//  Users
//  Create a new user
export async function createUser(data) {
    const res = await fetch(`${API}/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
}

// borrow a book (expects: { user_id, book_id })
export async function borrowBook(data) {
    const res = await fetch(`${API}/borrow/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
}