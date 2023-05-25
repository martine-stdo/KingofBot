import { AcGameObject } from "./AcGameObject";
import { Walls } from "./Walls";

export class GameMap extends AcGameObject {
    constructor(ctx,parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;

        this.rows = 13;
        this.cols = 14;

        this.inner_walls_count = 20;
        this.walls = [];
    }

    check_connectivity(g, sx, sy, tx, ty) {
        if (sx == tx && sy == ty) return true;
        g[sx][sy] = true;

        let dx = [0, 1, 0, -1], dy = [-1, 0, 1, 0];

        for (let i = 0; i < 4; i ++) {
            let x = sx + dx[i], y = sy + dy[i];
            if (!g[x][y] && this.check_connectivity(g, x, y, tx, ty)) return true;
        }

         return false;

    }

    create_walls() {
        const g = [];
        for (let r = 0; r < this.rows; r ++) {
            g[r] = [];
            for (let c = 0; c < this.cols; c ++) {
                g[r][c] = false;
            }
        }

        //给四周生成墙
        for (let r = 0; r < this.rows; r ++) {
            g[r][0] = g[r][this.cols - 1] = true;
        }


        for (let c = 0; c < this.cols; c ++) {
            g[0][c] = g[this.rows - 1][c] = true;
        }


        //创建随机障碍物
        for (let i = 0; i < this.inner_walls_count / 2; i ++) {
            for (let j = 0; j < 1000; j++) {
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);

                if (g[r][c] || g[this.rows - 1 - r][this.cols - 1 - c]) continue;

                if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2) continue;

                g[r][c] = g[this.rows - 1 - r][this.cols - 1 - c] = true;
                break;
            }
        }
        const copy_g = JSON.parse(JSON.stringify(g));
        if (!this.check_connectivity(copy_g, this.rows - 2, 1, 1, this.cols - 2)) {
            return false;   
        }

        for (let r = 0; r < this.rows; r ++) {
            for (let c = 0; c < this.cols; c ++) {
                if (g[r][c]) {
                    this.walls.push(new Walls(r, c, this));
                }
            }
        }

        return true;

    }

    start() { 
       for (let i = 0; i < 1000; i ++) {
              if (this.create_walls()) break;
       }
    }
    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }
    update() { 
        this.update_size();
        this.render();
    }

    render() {
        const color_event = "rgb(162, 208, 72)", color_odd = "rgb(170, 215, 81)"
        for (let r = 0; r < this.rows; r ++) {
            for (let c = 0; c < this.cols; c ++) {
                this.ctx.fillStyle = (r + c) % 2 ? color_odd : color_event;
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }
}