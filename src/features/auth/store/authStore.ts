import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage } from '@/store/createPersistedSlice';
import type { User } from '@/types';

interface AuthState {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	// Actions
	setCredentials: (user: User, token: string) => void;
	logout: () => void;
	setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			token: null,
			isAuthenticated: false,
			isLoading: false,

			setCredentials: (user, token) =>
				set({ user, token, isAuthenticated: true }),

			logout: () => set({ user: null, token: null, isAuthenticated: false }),

			setLoading: (isLoading) => set({ isLoading }),
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => mmkvStorage),
			partialize: (state) => ({
				user: state.user,
				token: state.token,
				isAuthenticated: state.isAuthenticated,
			}),
		},
	),
);
