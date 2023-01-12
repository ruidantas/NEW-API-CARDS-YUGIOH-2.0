export class findByIdRouter {
  constructor(findbyidController, router) {
    this.findById = findbyidController;
    this.router = router;
  }

  route() {
    this.router.get("/findById-card/:id", (req, res) =>
      this.findById.execute(req, res)
    );
    return this.router;
  }
}
