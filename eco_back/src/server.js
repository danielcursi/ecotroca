const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarioRoutes');
const propostaRoutes = require('./routes/propostaRoutes');
const mensagemRoutes = require('./routes/mensagemRoutes');
const app = express();
const PORT = 3000

app.use(cors({
    origin: 'http:/localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// Rotas principais
app.use(express.json());
app.use('/api/propostas', propostaRoutes)
app.use('/api/mensagens', mensagemRoutes)
app.use('/api/usuarios', usuariosRoutes)

app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome To NodeJs"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})