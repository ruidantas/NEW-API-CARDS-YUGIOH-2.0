import {repository} from '../dataBase/repository/repository.js';
import {createController} from '../controller/createController.js';
import {createService} from '../services/serviceCreate.js';
import {createRouter} from '../router/routerCreate.js';

export const makeCreate = (router) => {
    const dataBase = new repository()
    const service = new createService(dataBase)
    const controller = new createController(service)
    const route = new createRouter(controller, router)
    return route
}