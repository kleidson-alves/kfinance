import { appSchema } from '@nozbe/watermelondb';
import { categorySchema } from './categorySchema';
import { goalSchema } from './goalSchema';
import { planningSchema } from './planningSchmea';
import { registerSchema } from './registerSchema';

const schemas = appSchema({
    version: 1,
    tables: [categorySchema, registerSchema, planningSchema, goalSchema],
});

export default schemas;
