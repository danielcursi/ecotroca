# ♻️ EcoTroca - Plataforma de Trocas Sustentáveis

O **EcoTroca** é uma plataforma inovadora que promove o reuso consciente de itens, permitindo que usuários cadastrem, visualizem e proponham trocas de forma prática e sustentável, contribuindo para uma economia circular e redução de desperdícios.

![banner](./eco_front/src/img/ecoTroca.png)

---

## 🌟 Funcionalidades Principais

- **🔐 Sistema de Autenticação** - Cadastro e login seguro de usuários
- **📦 Gerenciamento de Itens** - Cadastro, edição e remoção de itens para troca
- **🔍 Busca Inteligente** - Filtros e busca por categoria, localização e palavras-chave
- **👤 Perfil Personalizado** - Área do usuário com histórico de trocas e itens cadastrados
- **🔄 Sistema de Propostas** - Interface para enviar e gerenciar propostas de troca
- **📱 Design Responsivo** - Experiência otimizada para desktop e dispositivos móveis
- **⚡ Performance Otimizada** - Navegação rápida com React Router e integração eficiente com backend

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- ⚛️ React 18+ com hooks
- 🧭 React Router Dom para navegação
- 🔄 Axios para consumo de APIs
- 🎨 CSS moderno com design responsivo
- 🧩 Componentes modulares e reutilizáveis

### **Backend**
- 🟢 Node.js com Express
- 🗄️ Prisma ORM para gestão de banco de dados
- 🐘 PostgreSQL como banco de dados principal
- 🔐 JWT para autenticação segura
- 🛡️ Middlewares de segurança e validação

---

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) 
- Banco de dados PostgreSQL instalado e configurado
- Git para clonagem do repositório

### 🔧 Configuração e Instalação

#### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/ecotroca.git
cd ecotroca
```
#### 2. Configurar ambiente backend
```bahs
# Navegar para diretório do backend
cd eco_back

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env_exemplo .env
```
- Edite o arquivo `.env` com suas configurações:
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ecotroca_db"
JWT_SECRET="seu_jwt_secret_aqui"
```
#### 3. Configurar banco de dados
```bash
# Executar migrações do Prisma
npx prisma migrate dev

# Opcional: Popular banco com dados de exemplo
npx prisma db seed
```
### 4. Configurar frontend
```bash
# Voltar ao diretório raiz e navegar para frontend
cd ../eco_front

# Instalar dependências
npm install
```
### 🎯 Execução da Aplicação

- Opção 1: Executar em terminais separados
   - Terminal 1 - Backend:

```bash
cd eco_back
node server.js
```
- Terminal 2 - Frontend:
```bash
cd eco_front
npm run dev
```
### 🌐 Acessos após inicialização
- Frontend: http://localhost:5173

- Backend: http://localhost:3000

- Prisma Studio (para gerenciamento do BD): http://localhost:5555 (execute npx prisma studio no diretório eco_back)


## Equipe 7
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/danielcursi">
        <img src="https://avatars.githubusercontent.com/u/105112847?v=4" width="100px;" alt="Rodrigo Cadeira"/><br>
        <sub>
          <b>Daniel Cursi</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/carlosrodrigues07">
        <img src="https://avatars.githubusercontent.com/u/127802040?v=4" width="100px;" alt="Carlos Henrique"/><br>
        <sub>
          <b>Carlos Henrique Rodrigues Paixao</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/raynaradepaula">
        <img src="https://avatars.githubusercontent.com/u/120529475?v=4" width="100px;" alt="Francisco Ivo"/><br>
        <sub>
          <b>Raynara de Paula</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/stevopablo">
        <img src="https://avatars.githubusercontent.com/u/148692557?v=4" width="100px;" alt="Francisco Ivo"/><br>
        <sub>
          <b>Pablo Lima</b>
        </sub>
      </a>
    </td>
</table>