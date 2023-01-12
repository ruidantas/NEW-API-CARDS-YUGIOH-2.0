import {card} from '../entities/entity.js';

export class createService{
    constructor(repository){
        this.repository=repository

    }

    async execute(elemento){
        const newCard = new card(elemento)
        newCard.validate()
        return await this.repository.create(newCard.getEntity())
    }
}