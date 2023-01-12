export class idService {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("Não encontrado");
    }

    const idCards = await this.repository.findById(id);
    if (!idCards) {
      throw new Error("NOT FOUND");
    }

    return idCards;
  }
}
