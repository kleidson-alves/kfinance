import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';

export default class CategoryModel extends Model {
    static table = 'categories';
    public static associations: Associations = {
        registers: { type: 'has_many', foreignKey: 'category_id' },
    };

    @text('name')
    name!: string;

    @field('color')
    color!: string;
}
