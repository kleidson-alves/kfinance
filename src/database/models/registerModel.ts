import { Model, Relation } from '@nozbe/watermelondb';
import { date, field, relation, text } from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';
import CategoryModel from './categoryModel';

export default class RegisterModel extends Model {
    static table = 'registers';
    public static associations: Associations = {
        categories: { type: 'belongs_to', key: 'category_id' },
    };

    @text('name')
    name!: string;

    @field('value')
    value!: number;

    @text('description')
    description?: string;

    @date('day')
    day!: number;

    @date('month')
    month!: number;

    @date('year')
    year!: number;

    @relation('categories', 'category_id')
    category!: Relation<CategoryModel>;
}
