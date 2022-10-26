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
            name: 'target_category',
            type: 'string',
            isOptional: true,
        },
        {
            name: 'start_date',
            type: 'number',
            isOptional: true,
        },
        {
            name: 'end_date',
            type: 'number',
            isOptional: true,
        },
        {
            name: 'is_reached',
            type: 'boolean',
        },
    ],
});
