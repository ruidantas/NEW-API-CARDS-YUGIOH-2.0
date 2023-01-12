import { repository } from "../dataBase/repository/repository.js";
import { findallController } from "../controller/findallController.js";
import { findAllRouter } from "../router/routerFindall.js";
import { searchService } from "../services/serviceFindall.js";

export const makeFindAll = (router) => {
  const dataBase = new repository();
  const service = new searchService(dataBase);
  const controller = new findallController(service);
  const route = new findAllRouter(controller, router);
  return route;
};
