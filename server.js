const express = require('express');

const app = express(); 

// Set an initial PORT

let PORT = process.env.PORT || 8000;

// Set up handle data parsing files

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "./Develop/public")));
// app.use( express.static('public'));


// IMPORT ROUTES - ORDER IS IMPORTANT 

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// SET UP LISTEN EVENT ON THE SERVER 

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}` );
})