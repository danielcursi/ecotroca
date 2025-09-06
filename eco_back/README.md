# EcoTroca API — Testes das Rotas

Este guia explica como testar a API do projeto **EcoTroca** utilizando **Insomnia**.  
Mostraremos apenas um exemplo de rota (`/api/usuarios`).  
As demais (`/api/itens`, `/api/categorias`, `/api/propostas`, `/api/mensagens`) seguem a **mesma lógica**.

---

## 🚀 Preparando o ambiente

1. **Instalar dependências**
   ```bash
   npm install
   ```
2. **Gerar o Prima Client**
   ```bash
   npx prisma generate
   ```
3. **Rodar as migrações do banco**
   ```bash
   npx prisma migrate dev
   ```
4. **Iniciar o servidor**
   ```bash
   npm start
   ```
5. **A API ficará disponível em:**
   ```bash
   http://localhost:3000
   ```

# 🔎 Testando a rota (`/api/usuarios`)

### 1. Criar Usuário

- Endpoint: (`POST /api/usuarios`)

- Body (JSON):

```bash
{
  "nome": "Carlos Rodrigues",
  "email": "carlos@email.com",
  "senha": "12345",
  "telefone": "88999999999",
  "cidade": "XXXXXXX",
  "bairro": "Centro"
}
```

### 2. Listar Usuários

- Endpoint: (`GET /api/usuarios`)

- Resposta esperada:

```bash
[
  {
    "id_usuario": 1,
    "nome": "Carlos Silva",
    "email": "carlos@email.com",
    "telefone": "88999999999",
    "cidade": "XXXXXX",
    "bairro": "Centro",
    "data_cadastro": "2025-09-03T19:41:53.427Z"
  }
]
```
### 3. Buscar Usuário por ID

- Endpoint: (`GET /api/usuarios/1`)

### 4. Atualizar Usuário

- Endpoint: PUT /api/usuarios/1

- Body (JSON):
```bash
{
  "telefone": "88988888888",
  "cidade": "Fortaleza"
}
```
### 5. Deletar Usuário

- Endpoint: (`DELETE /api/usuarios/1`)

# 📌 Observação

As demais rotas (`/api/itens`), (`/api/categorias`), (`/api/propostas`), (`/api/mensagens)` seguem o mesmo padrão:

1. POST para criar

2. GET para listar

3. GET /:id para buscar por ID

4. PUT /:id para atualizar

5. DELETE /:id para remover

Basta ajustar o endpoint e o body conforme os modelos definidos no (`schema.prisma`).

# 🛠️ Erros Comuns

`Foreign key constraint violated`
→ Verifique se os IDs usados (usuário, item, categoria, etc.) realmente existem no banco antes de criar relações.

`@prisma/client did not initialize`
→ Rode npx prisma generate para atualizar o client.