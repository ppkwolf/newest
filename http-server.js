const express = require('express');
const app = express();
const port = 3000;

// Define route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;