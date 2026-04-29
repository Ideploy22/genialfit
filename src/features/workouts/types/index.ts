import type { z } from 'zod';
import type { WORKOUT_CATEGORIES, workoutSchema } from './schemas';

export type WorkoutCategory = (typeof WORKOUT_CATEGORIES)[number];

export type WorkoutFormData = z.infer<typeof workoutSchema>;

export interface Workout extends WorkoutFormData {
	id: string;
	createdAt: string;
}
