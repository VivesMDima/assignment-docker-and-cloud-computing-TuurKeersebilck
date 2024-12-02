const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let counter = 0;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/counter', (req, res) => res.json({ counter }));

app.post('/counter/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

app.post('/counter/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
