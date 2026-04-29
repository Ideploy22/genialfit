import { LoginScreen } from '@/features/auth/screens/LoginScreen';
import { useAuthStore } from '@/features/auth/store/authStore';
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { WorkoutFormScreen } from '@/features/workouts/screens/WorkoutFormScreen';
import { WorkoutListScreen } from '@/features/workouts/screens/WorkoutListScreen';
import { useNavigationStore } from '@/store/navigationStore';

function AppNavigator() {
	const screen = useNavigationStore((s) => s.screen);

	switch (screen) {
		case 'WorkoutList':
			return <WorkoutListScreen />;
		case 'WorkoutForm':
			return <WorkoutFormScreen />;
		default:
			return <HomeScreen />;
	}
}

export function RootNavigator() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (!isAuthenticated) {
		return <LoginScreen />;
	}

	return <AppNavigator />;
}
