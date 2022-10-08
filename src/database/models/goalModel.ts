import { Model } from '@nozbe/watermelondb';
import { date, field, text } from '@nozbe/watermelondb/decorators';

export default class GoalModel extends Model {
    public static table = 'goals';

    @text('type')
    type!: string;

    @field('value')
    value!: number;

    @field('is_temp')
    isTemp!: boolean;

    @date('start_date')
    startDate?: Date;

    @date('end_date')
    endDate?: Date;

    get isActive(): boolean {
        const currentDate = new Date();

        if (!this.startDate || !this.endDate) {
            return true;
        }

        return this.startDate <= currentDate && currentDate <= this.endDate;
    }
}
