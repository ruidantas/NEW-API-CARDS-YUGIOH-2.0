export class updateController {
  constructor(updateService, idService) {
    this.update = updateService;
    this.findbyid = idService;
  }

  async execute(req, res) {
    try {
      const params = req.params.id;
      const body = req.body;
      const response = await this.update.execute(body, params);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
