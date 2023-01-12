export class updateController {
  constructor(updateService) {
    this.update = updateService; 
  }

  async execute(req, res) {
    try {
      const id = req.params.id;
      const paramEdit = req.body;
      const response = await this.update.execute(paramEdit, id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
