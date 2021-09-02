import { Request, Response } from 'express';
import { newtestService } from '../service/newtestService';
import { CustomLogger } from '../config/Logger'
let newtest = new newtestService();

export class newtestController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
newtest.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into newtestController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from newtestController.ts: GpCreate');
    })}


}