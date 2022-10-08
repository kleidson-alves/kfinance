import { tableSchema } from '@nozbe/watermelondb';

export const goalSchema = tableSchema({
    name: 'goals',
    columns: [
        {
            name: 'type',
            type: 'string',
        },
        {
            name: 'value',
            type: 'number',
        },
        {
            name: 'is_temp',
            type: 'boolean',
        },
        {
            name: 'start_date',
            type: 'number',
        },
        {
            name: 'end_date',
            type: 'number',
        },
        {
            name: 'is_reached',
            type: 'boolean',
        },
    ],
});
