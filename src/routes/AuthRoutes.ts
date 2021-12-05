import BaseRoutes from './BaseRoutes';
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes {
    
    public routes(): void {

        this.router.post("/login", AuthController.login );
        this.router.post("/register", AuthController.register );

    }
}

export default new AuthRoutes().router;