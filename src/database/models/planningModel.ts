import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export default class PlanningModel extends Model {
    public static table = 'plannings';

    @text('name')
    name!: string;

    @field('value')
    value!: number;

    @field('type')
    type!: string;
}
