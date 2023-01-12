import {card} from '../entities/entity.js'

export class updateService{
    constructor(repository, idService){
        this.repository = repository;
        this.idService = idService;
    }

    async excute(elemento, id){
        const updateId = await this.idService.excute(id)
        const updateElemento = Object.assign(updateId, elemento)
        const elementValidate = new card(updateElemento)
        elementValidate.validate()
        return await this.repository.update(elementValidate.getEntity())

    }
}