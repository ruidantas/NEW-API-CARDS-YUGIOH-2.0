import {model, Schema} from "mongoose"

const schema = new Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    typing:{type:String,required:true},
    level:{type:String,required:true},
    category:{type:String,required:true},
    atributte:{type:String,required:true},
    effect:{type:String,required:true},
    image:{type:String,required:true},
    atk:{type:String,required:true},
    def:{type:String,required:true}
    
})

    export const cardsYugioh = model("cards", schema);
