const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000

app.use(cors({
    origin: 'http:/localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome To NodeJs"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})