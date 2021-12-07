import { Request, Response } from 'express';
import Auth from '../utils/Auth';
const db = require('../db/models');

class AuthController {

    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        password = await Auth.passwordHash(password);        
        const createdUser = await db.user.create({ username, password });

        return res.json({message: 'user created'});
    }
    
    login = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        const user = await db.user.findOne({ 
            where:  {username}
        });
        if(!user) return res.json({message: 'invalid username'});

        let compare = await Auth.passwordCompare(password, user.password);
        if(!compare) return res.json({message: 'invalid password'});

        let token: string = Auth.generateToken(user.id, 'user'); 
        return res.json({token})
        
    }
    
    profile = async (req: Request,  res: Response): Promise<Response> => {
        return 'huhu';
    }
}

export default new AuthController();