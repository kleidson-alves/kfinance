import { tableSchema } from '@nozbe/watermelondb';

export const registerSchema = tableSchema({
    name: 'registers',
    columns: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'value',
            type: 'number',
        },
        {
            name: 'description',
            type: 'string',
            isOptional: true,
        },
        {
            name: 'day',
            type: 'number',
        },
        {
            name: 'month',
            type: 'number',
        },
        {
            name: 'year',
            type: 'number',
        },
        {
            name: 'category_id',
            type: 'string',
            isIndexed: true,
        },
    ],
});
