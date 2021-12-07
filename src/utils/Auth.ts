import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Auth {
    public static passwordHash = (password: string): Promise<string> => {
        return bcrypt.hash(password, 10);
    }

    public static passwordCompare = async (text: string, encrypted: string) => {
        let result = await bcrypt.compare(text, encrypted);
        return result;
    }

    public static generateToken = (id: string, role: string): string => {
        const secret: string = process.env.PORT || 'secret'; 
        const token: string = jwt.sign( { id, role }, secret );
        return token;
    }
}

export default Auth;