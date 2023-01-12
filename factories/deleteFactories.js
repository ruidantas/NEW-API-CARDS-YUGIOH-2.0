import { repository } from "../dataBase/repository/repository.js";
import { deleteController } from "../controller/deleteController.js";
import { deleteRouter } from "../router/routerDelete.js";
import { deleteService } from "../services/serviceDelete.js";

export const makeDelete = (router) => {
  const dataBase = new repository();
  const service = new deleteService(dataBase);
  const controller = new deleteController(service);
  const route = new deleteRouter(controller, router);
  return route;
};
