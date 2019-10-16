import { Request, Response } from 'express';

module.exports = {
    teste(req: Request, res: Response) {
        res.send('Teste');
    }
}