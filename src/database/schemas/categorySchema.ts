import { tableSchema } from '@nozbe/watermelondb';

export const categorySchema = tableSchema({
    name: 'categories',
    columns: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'color',
            type: 'string',
        },
        {
            name: 'is_positive',
            type: 'boolean',
        },
    ],
});
