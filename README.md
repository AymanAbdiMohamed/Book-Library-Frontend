# Book Library Frontend

A React + Vite frontend application for the Book Library system. This provides a user-friendly interface to browse books, manage genres, and interact with the book library backend.

## Features

- 📚 **Browse Books** - View all available books in the library
- 🏷️ **Genre Filtering** - Filter books by genre
- ➕ **Add Books** - Create new book entries
- 👥 **User Management** - Manage library users
- 🎨 **Responsive UI** - Clean and intuitive interface
- ⚡ **Fast Development** - Vite for rapid development and HMR

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS
- **HTTP Client**: Axios (for API calls)
- **Linting**: ESLint

## Prerequisites

- Node.js 14+ and npm (or yarn/pnpm)
- Book Library Backend running on `http://localhost:8000`

## Installation

### 1. Navigate to the project directory
```bash
cd Book-Library-Frontend
```

### 2. Install dependencies
```bash
npm install
```

## Project Structure

```
Book-Library-Frontend/
├── src/
│   ├── main.jsx              # React app entry point
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   ├── assets/              # Static assets
│   ├── pages/
│   │   └── Home.jsx         # Home page
│   ├── components/
│   │   ├── BookList.jsx     # Display all books
│   │   ├── AddBookForm.jsx  # Form to add books
│   │   └── GenreList.jsx    # Display genres
│   └── api/
│       └── api.js           # API client configuration
├── public/                  # Public static files
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md
```

## Running the Application

### Development Mode (with HMR)
```bash
npm run dev
```

The application will start on `http://localhost:5173` by default.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## API Integration

The frontend communicates with the backend API. Ensure the backend is running on `http://localhost:8000`.

Update the API base URL in `src/api/api.js` if your backend runs on a different address.

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ESLint Configuration

The project includes ESLint rules for code quality. To run linting:

```bash
npm run lint
```

## Components

### BookList
Displays all books from the backend with basic information and filtering options.

### AddBookForm
A form component to add new books to the library. Validates input and sends data to the backend.

### GenreList
Shows available genres and allows filtering books by genre.

## Environment Configuration

If needed, you can configure the API endpoint in `.env`:

```
VITE_API_BASE_URL=http://localhost:8000
```

And update `src/api/api.js` to use the environment variable:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
```

## Common Issues

### CORS Errors
Make sure the backend is running and has CORS configured for `http://localhost:5173`.

### Port Already in Use
If port 5173 is in use, Vite will automatically use the next available port. Check the terminal output.

### Module Not Found
Ensure all dependencies are installed:
```bash
npm install
```

## Troubleshooting

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Check that backend API is accessible: `curl http://localhost:8000/docs`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test the frontend with the backend API
4. Submit a pull request

## License

MIT License
