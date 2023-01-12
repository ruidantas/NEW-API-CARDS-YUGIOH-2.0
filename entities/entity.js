import { randomUUID } from "crypto";

export class card {
  constructor(obj) {
    this.id = obj.id ?? randomUUID();
    this.name = obj.name;
    this.typing = obj.typing;
    this.level = obj.level;
    this.category = obj.category;
    this.atributte = obj.atributte;
    this.effect = obj.effect;
    this.image = obj.image;
    this.atk = obj.atk;
    this.def = obj.def;
  }
  validate() {
    if (
      !this.name ||
      !this.typing ||
      !this.level ||
      !this.category ||
      !this.atributte ||
      !this.atributte ||
      !this.effect ||
      !this.image ||
      !this.atk ||
      !this.def
    ) {
      throw new Error("Informe todos os campos obrigatórios");
    }
  }

  getEntity() {
    return {
      id: this.id,
      name: this.name,
      typing: this.typing,
      level: this.level,
      category: this.category,
      atributte: this.atributte,
      effect: this.effect,
      image: this.image,
      atk: this.atk,
      def: this.def,
    };
  }
}
