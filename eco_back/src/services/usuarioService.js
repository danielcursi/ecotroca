require('dotenv').config();
const prisma = require('../prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.SECRET_KEY;

exports.getAllUsuarios = async() => {
    return prisma.usuario.findMany({
        orderBy:{
            nome: 'asc'
        }
    })
}

exports.getUsuarioById = async(id_usuario) => {
    return prisma.usuario.findUnique({
        where:{
            id_usuario: Number(id_usuario)
        }
    })
}
exports.getUsuarioByEmail = async(email) => {
    return prisma.usuario.findUnique({
        where: {
            email: email
        }
    })
}

exports.addUsuario = async(nome, email, senha, telefone, cidade, bairro) => {
    // const existeUsuario = await this.buscarUsuarioPorEmail(email);
    const existeUsuario = await prisma.usuario.findUnique({
        where: {
            email: email
        }
    })
    
    if (existeUsuario){
        throw new Error("Usuário já cadastrado com esse email");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    return prisma.usuario.create({
        data: {
            nome: nome,
            email: email,
            senha: senhaCriptografada,
            telefone: telefone,
            cidade: cidade,
            bairro: bairro
        }
    })
}

exports.loginUsuario = async (email, senha) => {
    if(!email || !senha) {
        throw new Error("Email e Senha  são obrigatórios");
    }
    const existeUsuario = await prisma.usuario.findUnique({
        where: {
            email
        }
    });
    
    if(!existeUsuario) {
        throw new Error("Usuário não encontrado");
    }

    const senhaValida = await bcrypt.compare(senha, existeUsuario.senha);
    if (!senhaValida) {
        throw new Error("Senha não é válida para este usuário");
    }

    const token = jwt.sign({
        id: existeUsuario.id_usuario,
        email: existeUsuario.email,
        nome: existeUsuario.nome
    },JWT_SECRET_KEY, {expiresIn: '24h'});

    return {
        usuario: {
            id_usuario: existeUsuario.id_usuario,
            nome: existeUsuario.nome,
            email: existeUsuario.email
        }, token
    }
}

exports.updateUsuario = async(id_usuario, nome, email, senha, telefone, cidade, bairro) => {
    // const existeUsuario = await this.buscarUsuarioPorId(id_usuario);
    const existeUsuario = await prisma.usuario.findUnique({
        where: {
            id_usuario: id_usuario
        }
    })

    if (!existeUsuario){
        throw new Error('Usuário não existe')
    }
    let senhaCriptografada = existeUsuario.senha;
    if (senha) {
        senhaCriptografada = await bcrypt.hash(senha, 10)
    }

    return prisma.usuario.update({
        where: {
            id_usuario: id_usuario
        },
        data: {
            nome: nome,
            email: email,
            senha: senhaCriptografada,
            telefone: telefone,
            cidade: cidade,
            bairro: bairro
        }
    })
}

exports.deleteUsuario = async(id_usuario) => {
    // const existeUsuario = this.buscarUsuarioPorId(id_usuario);
    const existeUsuario = await prisma.usuario.findUnique({
        where: {
            id_usuario: id_usuario
        }
    })

    if (!existeUsuario) {
        throw new Error("Usuário não encontrado");
    }

    return prisma.usuario.delete({
        where: {
            id_usuario: id_usuario
        }
    })
}