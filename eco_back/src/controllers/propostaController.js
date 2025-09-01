import propostaService from "../services/propostaService.js";

class PropostaController {
  async criar(req, res) {
    try {
      const proposta = await propostaService.criarProposta(req.body);
      res.status(201).json(proposta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async listar(req, res) {
    res.json(await propostaService.listarPropostas());
  }

  async buscar(req, res) {
    const proposta = await propostaService.buscarPorId(Number(req.params.id));
    if (!proposta) return res.status(404).json({ error: "Proposta não encontrada" });
    res.json(proposta);
  }

  async atualizar(req, res) {
    try {
      res.json(await propostaService.atualizarProposta(Number(req.params.id), req.body));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deletar(req, res) {
    try {
      await propostaService.deletarProposta(Number(req.params.id));
      res.json({ message: "Proposta deletada com sucesso" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new PropostaController();
