import { Block } from "./block";

export class Group extends Block {
    children: Map<number, Block>;

    constructor(){
        super();
        this.children = new Map();
    }

    add(){

    }

    remove(){

    }

    draw(){

    }
}