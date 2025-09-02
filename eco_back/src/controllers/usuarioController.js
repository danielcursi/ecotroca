const { getAllUsuarios, getUsuarioById, addUsuario, updateUsuario, deleteUsuario, loginUsuario } = require("../services/usuarioService")

exports.getAllUsuariosHandler = async (req, res) => {
    try{
        const usuarios = await getAllUsuarios();
        res.status(200).json(usuarios);
    }catch (err){
        res.status(500).json({ error: err.message })
    }
}

exports.getUsuarioByIdHandler = async(req, res) => {
    const  id_usuario  = parseInt(req.params.id_usuario);
    try{
        const usuario = await getUsuarioById(id_usuario);
        if (!usuario) {
            return res.status(404).json({error: `Usuário não encontrado`})
        }
        res.status(200).json(usuario)
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

exports.addUsuarioHandler = async(req, res) => {
    const { nome, email, senha, telefone, cidade, bairro} = req.body;
    
    try{
        const usuarioNovo = await addUsuario(nome, email, senha, telefone, cidade, bairro);
        res.status(201).json(usuarioNovo);
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

exports.loginUsuarioHandler = async (req, res) => {
    const { email, senha } = req.body;
    try{
        if(!email || !senha) {
            return res.status(400).json({ error: 'Verifique email e senha' });
        }
        const { usuario, token } = await loginUsuario(email, senha)
        res.status(200).json({ 
            message: 'Login realizado com sucesso!',
            usuario,
            token
        })
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

exports.updateUsuarioHandler = async(req, res) => {
    const id_usuario = parseInt(req.params.id_usuario);
    const {nome, email, senha, telefone, cidade, bairro} = req.body;
    try{
        const usuarioAtulizado = await updateUsuario(id_usuario, nome, email, senha, telefone, cidade, bairro);
        res.status(200).json(
            {user: usuarioAtulizado,
            message: "Usuário atualizado com sucesso!"
        });
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

exports.deleteUsuarioHandler = async(req, res) => {
    const id_usuario = parseInt(req.params.id_usuario);

    try{
        await deleteUsuario(id_usuario);
        res.status(204).json({ message: 'Usuário deletado com sucesso!' });
    }catch(err){
        if(err.message === "Usuário não encontrado"){
            return res.status(404).json({ error: "Usuário não existe" })
        }
        res.status(500).json({ error: 'Erro ao deletar usuário' })
    }
}