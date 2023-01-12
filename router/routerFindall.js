export class findAllRouter {
  constructor(findallController, router) {
    this.findAll = findallController;
    this.router = router;
  }

  route() {
    this.router.get("/all-cards", (_, res) => this.findAll.execute(_, res));
    return this.router;
  }
}
