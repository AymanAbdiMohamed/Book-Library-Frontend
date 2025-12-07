// base URL for the backend API
const API = 'http://127.0.0.1:8000'; 

//  fetch all genres from the backend
export async function getGenres() {
    const res = await fetch(`${API}/genres/`);
    return res.json();
}
