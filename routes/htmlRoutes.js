//Import modules
const path = require('path');

// Set up HTML routes and export the module

module.exports = function(app) {
    // Define GET 'note' request route should return 'note html'.

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '..Develop/public/notes.html'))
    });

    // Set default route to home for all other page request

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "..Develop/public/index.html"))
      })
}