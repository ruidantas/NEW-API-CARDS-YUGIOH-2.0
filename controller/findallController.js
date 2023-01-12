export class findallController {
  constructor(searchService) {
    this.search = searchService;
  }

  async execute(_, res) {
    try {
      const response = await this.search.execute();
      res.status(200).send(response);
    } catch(err) {
      res.status(500);
    }
  }
}
