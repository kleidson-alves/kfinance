import { tableSchema } from '@nozbe/watermelondb';

export const planningSchema = tableSchema({
    name: 'plannings',
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
            name: 'type',
            type: 'string',
        },
    ],
});
