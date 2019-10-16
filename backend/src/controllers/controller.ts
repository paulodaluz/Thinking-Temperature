import { Request, Response } from 'express';

module.exports = {
  onAirConditioning(req: Request, res: Response) {
    res.status(200).json({response: 'Desligando ar condicionado'});
  },

  offAirConditioning(req: Request, res: Response) {
    res.status(200).json({ response: 'Desligando ar condicionado' });
  },

  automaticMode(req: Request, res: Response) {
    res.status(200).json({ response: 'Modo automatico ativado' });
  }
};