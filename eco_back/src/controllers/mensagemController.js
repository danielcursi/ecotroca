import mensagemService from "../services/mensagemService.js";

class MensagemController {
  async criar(req, res) {
    try {
      const mensagem = await mensagemService.criarMensagem(req.body);
      res.status(201).json(mensagem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async listar(req, res) {
    res.json(await mensagemService.listarMensagens());
  }

  async buscar(req, res) {
    const mensagem = await mensagemService.buscarPorId(Number(req.params.id));
    if (!mensagem) return res.status(404).json({ error: "Mensagem não encontrada" });
    res.json(mensagem);
  }

  async atualizar(req, res) {
    try {
      res.json(await mensagemService.atualizarMensagem(Number(req.params.id), req.body));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deletar(req, res) {
    try {
      await mensagemService.deletarMensagem(Number(req.params.id));
      res.json({ message: "Mensagem deletada com sucesso" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new MensagemController();
