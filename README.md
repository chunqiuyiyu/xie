# xie

> A 9KB (3KB gzip) single HTML notebook, perfect for minimalists.

A simple, self-contained application with Markdown support. Write, edit, and manage your notes or articles directly in the browser, and save the result as a static HTML file.

## Features
- Create, edit, and delete articles in your browser
- Supports a wide range of Markdown syntax (headings, lists, code, links, images, etc.)
- Save your entire wiki as a single HTML file for easy backup or sharing
- Minimal, clean interface with custom styles

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)

### Installation
1. Clone this repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
Start the development server:
```sh
npm run dev
```
Visit the local address shown in the terminal (usually http://localhost:5173).

### Build
To build the project for production:
```sh
npm run build
```
The output will be in the `dist/` directory.

## Project Structure
```
├── index.html         # Main HTML file
├── package.json       # Project metadata and scripts
├── vite.config.ts     # Vite configuration
├── src/
│   ├── main.js        # App entry point, UI logic
│   ├── helper.js      # DOM helpers and save/edit/delete logic
│   └── md.js          # Markdown parser
├── styles/
│   ├── custom.css     # Custom styles
│   └── neat.css       # Additional styles
```

## License
MIT
