import { Request, Response } from 'express';
import {newtestDao} from '../dao/newtestDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let newtest = new newtestDao();

export class newtestService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newtestService.ts: GpCreate')
     let  newtestData = req.body;
     newtest.GpCreate(newtestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newtestService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}