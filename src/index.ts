import express, {Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => res.json({message:'ini ts'}));

        this.app.route("/").post((req: Request, res: Response) => res.json(req.body));


    }
}

const port: Number = 80;
const app = new App().app;
app.listen(port, ()=> console.log(`app run in port ${port}`));
