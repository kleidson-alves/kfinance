import { appSchema } from '@nozbe/watermelondb';
import { categorySchema } from './categorySchema';
import { registerSchema } from './registerSchema';

const schemas = appSchema({
    version: 1,
    tables: [categorySchema, registerSchema],
});

export default schemas;
