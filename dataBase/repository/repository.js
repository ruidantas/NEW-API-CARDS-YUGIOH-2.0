import { cardsYugioh } from "../schema/schema.js";

export class repository {
  async create(cartas) {
    return await cardsYugioh.create(cartas);
  }

  async update(cartas) {
    return await cardsYugioh.findOneAndUpdate({ id: cartas.id }, cartas, {
      new: true,
    });
  }

  async findAll() {
    return await cardsYugioh.find();
  }

  async findById(id) {
    return await cardsYugioh.findOne({ id: id });
  }

  async delete(id) {
    return await cardsYugioh.findOneAndRemove({ id: id });
  }
}
