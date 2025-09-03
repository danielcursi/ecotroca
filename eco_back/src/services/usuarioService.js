require('dotenv').config();
const prisma = require('../prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'ZIG5Mi9EBtrJmlm8D84HO83hDSvREpYp';
console.log(JWT_SECRET_KEY)

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

exports.addUsuario = async ({ nome, email, senha, telefone, cidade, bairro }) => {
    const existeUsuario = await prisma.usuario.findUnique({
        where: { email }
    });

    if (existeUsuario) {
        throw new Error("Usuário já cadastrado com esse email");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    return prisma.usuario.create({
        data: {
            nome,
            email,
            senha_hash: senhaCriptografada,
            telefone,
            cidade,
            bairro
        }
    });
};


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

    const senhaValida = await bcrypt.compare(senha, existeUsuario.senha_hash);
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

// exports.updateUsuario = async(id_usuario, nome, email, senha, telefone, cidade, bairro) => {
//     // const existeUsuario = await this.buscarUsuarioPorId(id_usuario);
//     const existeUsuario = await prisma.usuario.findUnique({
//         where: {
//             id_usuario: id_usuario
//         }
//     })

//     if (!existeUsuario){
//         throw new Error('Usuário não existe')
//     }
//     let senhaCriptografada = existeUsuario.senha_hash;
//     if (senha) {
//         senhaCriptografada = await bcrypt.hash(senha, 10)
//     }

//     return prisma.usuario.update({  
//         where: {
//             id_usuario: id_usuario
//         },
//         data: {
//             nome: nome || existeUsuario.nome,
//             email: email || existeUsuario.email,
//             senha: senhaCriptografada,
//             telefone: telefone || existeUsuario.telefone,
//             cidade: cidade || existeUsuario.cidade,
//             bairro: bairro || existeUsuario.bairro
//         }
//     })
// }
exports.updateUsuario = async (id_usuario, dados) => {
    // Verifica se o usuário existe
    const existeUsuario = await prisma.usuario.findUnique({
        where: { id_usuario: Number(id_usuario) }
    });

    if (!existeUsuario) {
        throw new Error('Usuário não existe');
    }

    let dadosAtualizados = { ...dados };

    // Se houver senha, criptografa e renomeia para senha_hash
    if (dados.senha) {
        dadosAtualizados.senha_hash = await bcrypt.hash(dados.senha, 10);
        delete dadosAtualizados.senha; // remove o campo senha
    }

    // Atualiza o usuário
    return prisma.usuario.update({
        where: { id_usuario: Number(id_usuario) },
        data: dadosAtualizados
    });
};
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