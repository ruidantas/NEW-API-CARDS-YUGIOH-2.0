export class deleteService {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("ID invalido.");
    }

    const deleteElemento = await this.repository.delete(id);
    if (!deleteElemento) {
      throw new Error("Elemento não encontrado");
    }

    return deleteElemento;
  }
}
