import { Request, Response } from 'express';
import IController from './ControllerInterface';

class UserController {
    index(req: Request, res: Response): Response {
        return res.json({message: 'index'});
    }
    create(req: Request, res: Response): Response {
        return res.json({message: req.body});
    }
    show(req: Request, res: Response): Response {
        return res.json({message: 'show'});
    }
    update(req: Request, res: Response): Response {
        return res.json({message: 'update'});
    }
    delete(req: Request, res: Response): Response {
        return res.json({message: 'delete'});
    }
    
}

export default new UserController();