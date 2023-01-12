export class findbyidController {
  constructor(idService) {
    this.searchId = idService;
  }

  async execute(req, res) {
    try {
      const response = await this.searchId.execute(req.params.id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
