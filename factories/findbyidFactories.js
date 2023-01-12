import { repository } from "../dataBase/repository/repository.js";
import {findbyidController} from '../controller/findbyidController.js';
import {findByIdRouter} from '../router/routerId.js';
import {idService} from '../services/serviceId.js';

export const makeFindById = (router) => {
    const dataBase = new repository();
    const service = new idService(dataBase);
    const controller = new findbyidController(service);
    const route = new findByIdRouter(controller, router);
    return route;
  };