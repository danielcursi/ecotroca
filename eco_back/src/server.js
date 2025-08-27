const express = require("express")
const usuarioRoutes = require("./routes/usuarioRoutes")
const app = express();
const PORT = 3000

app.use("/api/usuarios", usuarioRoutes)

app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome To NodeJs"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})