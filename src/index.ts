import express, {Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv } from 'dotenv';

// ROUTERS
import Routes from './routes';

class App {
    public app: Application;

    constructor() {
        dotenv();
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
        new Routes(this.app)
    }
}

const app = new App().app;
const port: Number = Number(process.env.PORT);
app.listen(port, () => console.log(`app run in port ${port}`));