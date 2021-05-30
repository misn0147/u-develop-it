const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());




// Default response for any other request (Not Found). This overrides all others if it is on top of any other get requests, so it needs to be below them.
app.use((req, res) => {
    res.status(404).end();
});

//Ths function will start the express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});