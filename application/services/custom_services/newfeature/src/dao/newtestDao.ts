import * as mongoose from 'mongoose';
import newtestModel from '../models/newtest';
import { CustomLogger } from '../config/Logger'


export class newtestDao {
    private newtest = newtestModel;
    constructor() { }
    
    public async GpCreate(newtestData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into newtestDao.ts: GpCreate');

    let temp = new newtestModel(newtestData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from newtestDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}