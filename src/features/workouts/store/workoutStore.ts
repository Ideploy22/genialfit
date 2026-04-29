import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage } from '@/store/createPersistedSlice';
import type { Workout, WorkoutFormData } from '../types';

interface WorkoutState {
	workouts: Workout[];
	add: (data: WorkoutFormData) => void;
	remove: (id: string) => void;
	update: (id: string, data: WorkoutFormData) => void;
}

export const useWorkoutStore = create<WorkoutState>()(
	persist(
		(set) => ({
			workouts: [],

			add: (data) =>
				set((state) => ({
					workouts: [
						{
							...data,
							id: Date.now().toString(),
							createdAt: new Date().toISOString(),
						},
						...state.workouts,
					],
				})),

			remove: (id) =>
				set((state) => ({
					workouts: state.workouts.filter((w) => w.id !== id),
				})),

			update: (id, data) =>
				set((state) => ({
					workouts: state.workouts.map((w) =>
						w.id === id ? { ...w, ...data } : w,
					),
				})),
		}),
		{
			name: 'workouts-storage',
			storage: createJSONStorage(() => mmkvStorage),
		},
	),
);
