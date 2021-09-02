import { Request, Response, NextFunction } from "express";
import { newtestController } from '../controller/newtestController';


export class Routes {
    private newtest: newtestController = new newtestController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/newtest').post(this.newtest.GpCreate);
     }

}