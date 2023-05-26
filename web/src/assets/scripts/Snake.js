import { AcGameObject } from "./AcGameObject";
import { Cell } from "./Cell";

export class Snake extends AcGameObject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.cells = [new Cell(info.r, info.c)]; //存放蛇的身体，cell[0]存放蛇头
        this.gamemap = gamemap;
    }

    start() { 

    }

    update() {
        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
 }