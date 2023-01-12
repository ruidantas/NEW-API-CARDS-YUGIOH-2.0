import { repository } from "../dataBase/repository/repository.js";
import { updateController } from "../controller/updateController.js";
import { updateRouter } from "../router/routerUpdate.js";
import { updateService } from "../services/serviceUpdate.js";
import { idService } from "../services/serviceId.js";

export const makeUpdate = (router) => {
  const dataBase = new repository();
  const findById = new idService(dataBase);
  const service = new updateService(dataBase, findById);
  const controller = new updateController(service);
  const route = new updateRouter(controller, router);
  return route;
};
