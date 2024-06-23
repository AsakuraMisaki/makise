import { Block } from "./block";
import { Group } from "./group";
import { Container, Sprite, Text, Graphics } from "pixi.js";

class graphDrawer { 
    children: Map<number, Group|Block>;
    container: Container;

    constructor(container:Container){
        this.children = new Map();
        this.container = container;
    }

    draw(){

    }
}