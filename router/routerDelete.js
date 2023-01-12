export class deleteRouter {
  constructor(deleteController, router) {
    this.delete = deleteController;
    this.router = router;
  }

  route() {
    this.router.delete("/delete-card/:id", (req, res) =>
      this.delete.execute(req, res)
    );
    return this.router;
  }
}
