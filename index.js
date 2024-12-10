const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

// Route to serve the main HTML page
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'design.html');
    console.log(`Attempting to send file: ${filePath}`); // Log the file path
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err); // Log any errors
            res.status(err.status).end();
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`This application is running at http://localhost:${port}`);
});
