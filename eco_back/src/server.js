const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const usuarioRoutes = require("./routes/usuarioRoutes");
const itemRoutes = require("./routes/itemRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const propostaRoutes = require("./routes/propostaRoutes");
const mensagemRoutes = require("./routes/mensagemRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Rotas principais
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/itens", itemRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/propostas", propostaRoutes);
app.use("/api/mensagens", mensagemRoutes);

// Start do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
