// src/prisma.js
const { PrismaClient } = require('./generated/prisma'); // caminho relativo ao src
const prisma = new PrismaClient();
module.exports = prisma;
