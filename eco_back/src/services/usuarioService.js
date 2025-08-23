const prisma = require('../../prisma');
const bcrypt = require('bcrypt');

exports.getUsuarios = async() => {
    return prisma.Usuario.findMany({
        orderBy:{
            nome: 'asc'
        }
    })
}

exports.getUsuarioById = async(id_usuario) => {
    return prisma.Usuario.findUnique({
        where:{
            id_usuario: id_usuario
        }
    })
}
exports.getUsuarioByEmail = async(email) => {
    return prisma.Usuario.findUnique({
        where: {
            email: email
        }
    })
}

exports.addUsuario = async(nome, email, senha, telefone, cidade, bairro) => {
    // const existeUsuario = await this.buscarUsuarioPorEmail(email);
    const existeUsuario = await prisma.Usuario.findUnique({
        where: {
            email: email
        }
    })
    
    if (existeUsuario){
        throw new Error("Usuário já cadastrado com esse email");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    return prisma.Usuario.create({
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

exports.updateUsuario = async(id_usuario, nome, email, senha, telefone, cidade, bairro) => {
    // const existeUsuario = await this.buscarUsuarioPorId(id_usuario);
    const existeUsuario = await prisma.Usuario.findUnique({
        where: {
            id_usuario: id_usuario
        }
    })
    
    if (!existeUsuario){
        throw new Error('Usuário não existe')
    }
    const senhaCriptografada = await bcrypt.hash(senha, 10)

    return prisma.Usuario.update({
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
    const existeUsuario = prisma.Usuario.findUnique({
        where: {
            id_usuario: id_usuario
        }
    })

    if (!existeUsuario) {
        throw new Error("Usuário não encontrado");
    }

    return prisma.Usuario.delete({
        where: {
            id_usuario: id_usuario
        }
    })
}