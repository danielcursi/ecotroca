const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token mal formatado" });

  try {
    const usuarioDecodificado = jwt.verify(token, JWT_SECRET_KEY);
    req.usuario = {
      id_usuario: usuarioDecodificado.id,
      email: usuarioDecodificado.email,
      nome: usuarioDecodificado.nome
    };
    console.log("Usuario decodificado no middleware autenticar:", req.usuario);
    next();
  } catch (err) {
    console.error("Erro de autenticação:", err);
    return res.status(403).json({ error: "Token inválido ou expirado" });
  }
}

module.exports = autenticar;
