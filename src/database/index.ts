import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import CategoryModel from './models/categoryModel';
import GoalModel from './models/goalModel';
import PlanningModel from './models/planningModel';
import RegisterModel from './models/registerModel';
import schemas from './schemas';

const adapter = new SQLiteAdapter({
    schema: schemas,
});

const database = new Database({
    adapter,
    modelClasses: [CategoryModel, RegisterModel, PlanningModel, GoalModel],
});

export default database;
