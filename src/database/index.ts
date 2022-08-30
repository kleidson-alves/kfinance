import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import CategoryModel from './models/categoryModel';
import RegisterModel from './models/registerModel';
import schemas from './schemas';

const adapter = new SQLiteAdapter({
    schema: schemas,
});

const database = new Database({
    adapter,
    modelClasses: [CategoryModel, RegisterModel],
});

export default database;
