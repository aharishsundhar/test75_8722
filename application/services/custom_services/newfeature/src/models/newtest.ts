
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const newtestSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   user: String
})

const newtestModel = mongoose.model('newtest', newtestSchema, 'newtest');
export default newtestModel;
