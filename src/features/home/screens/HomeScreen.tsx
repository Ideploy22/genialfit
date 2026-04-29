import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useWorkoutStore } from '@/features/workouts/store/workoutStore';
import { useNavigationStore } from '@/store/navigationStore';

export function HomeScreen() {
	const { user, logout } = useAuth();
	const workouts = useWorkoutStore((s) => s.workouts);
	const navigate = useNavigationStore((s) => s.navigate);

	const totalMinutes = workouts.reduce((acc, w) => acc + Number(w.duration), 0);

	return (
		<View className="flex-1 bg-surface px-6 pt-14">
			{/* Header */}
			<View className="mb-8">
				<Text className="text-3xl font-bold text-primary">Genialfit</Text>
				<Text className="text-gray-500 mt-1">
					Olá, {user?.name ?? 'Atleta'} — bora treinar?
				</Text>
			</View>

			{/* Stats */}
			<View className="flex-row gap-4 mb-6">
				<TouchableOpacity
					className="flex-1 bg-card rounded-2xl p-4 shadow-sm"
					onPress={() => navigate('WorkoutList')}
					activeOpacity={0.8}
				>
					<Text className="text-xs text-gray-500 mb-1">Treinos salvos</Text>
					<Text className="text-4xl font-bold text-primary">
						{workouts.length}
					</Text>
					<Text className="text-xs text-primary mt-2">Ver todos →</Text>
				</TouchableOpacity>

				<View className="flex-1 bg-card rounded-2xl p-4 shadow-sm">
					<Text className="text-xs text-gray-500 mb-1">Total acumulado</Text>
					<Text className="text-4xl font-bold text-secondary">
						{totalMinutes}
					</Text>
					<Text className="text-xs text-gray-400 mt-2">minutos</Text>
				</View>
			</View>

			{/* Quick actions */}
			<View className="gap-3 mb-8">
				<Button label="+ Novo Treino" onPress={() => navigate('WorkoutForm')} />
				<Button
					label="Ver Treinos"
					variant="outline"
					onPress={() => navigate('WorkoutList')}
				/>
			</View>

			<Button label="Sair" variant="ghost" onPress={logout} />
		</View>
	);
}
