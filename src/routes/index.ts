import {Application} from 'express';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes';

class Routes {
    public app: Application;

    constructor (app: Application) {
        this.app = app;
        this.routes();
    }

    protected routes():void {
        
        this.app.use('/user', UserRoutes);
        this.app.use('/auth', AuthRoutes);
        
    }    
}

export default Routes;