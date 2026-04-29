import { create } from 'zustand';

export type AppScreen = 'Home' | 'WorkoutList' | 'WorkoutForm';

interface NavigationState {
	screen: AppScreen;
	params: Record<string, unknown>;
	navigate: (screen: AppScreen, params?: Record<string, unknown>) => void;
	goBack: () => void;
	history: AppScreen[];
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
	screen: 'Home',
	params: {},
	history: [],

	navigate: (screen, params = {}) =>
		set((state) => ({
			history: [...state.history, state.screen],
			screen,
			params,
		})),

	goBack: () => {
		const { history } = get();
		if (history.length === 0) return;
		const previous = history[history.length - 1];
		set((state) => ({
			screen: previous,
			params: {},
			history: state.history.slice(0, -1),
		}));
	},
}));
