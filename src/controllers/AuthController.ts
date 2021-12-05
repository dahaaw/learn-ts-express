import { Request, Response } from 'express';
import PasswordHash from '../utils/PasswordHash';
const db = require('../db/models');

class AuthController {

    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        password = await PasswordHash.hash(password);        
        const createdUser = await db.user.create({ username, password });

        return res.json({message: 'user created'});
    }
    
    login(req: Request, res: Response): Response {
        return res.json({message: req.body});
    }

    // 
}

export default new AuthController();