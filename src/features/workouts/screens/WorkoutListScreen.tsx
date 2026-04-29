import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigationStore } from '@/store/navigationStore';
import { useWorkoutStore } from '../store/workoutStore';
import type { Workout } from '../types';

const CATEGORY_COLOR: Record<string, string> = {
	Musculação: 'bg-primary-100 text-primary-600',
	Cardio: 'bg-red-100 text-red-600',
	Funcional: 'bg-amber-100 text-amber-600',
	Flexibilidade: 'bg-green-100 text-green-600',
};

function WorkoutCard({
	item,
	onDelete,
}: {
	item: Workout;
	onDelete: (id: string) => void;
}) {
	const badgeClass =
		CATEGORY_COLOR[item.category] ?? 'bg-gray-100 text-gray-600';
	const date = new Date(item.createdAt).toLocaleDateString('pt-BR');

	const confirmDelete = () => {
		Alert.alert('Excluir treino', `Deseja excluir "${item.name}"?`, [
			{ text: 'Cancelar', style: 'cancel' },
			{
				text: 'Excluir',
				style: 'destructive',
				onPress: () => onDelete(item.id),
			},
		]);
	};

	return (
		<View className="bg-card rounded-2xl p-4 mb-3 shadow-sm">
			<View className="flex-row items-start justify-between">
				<View className="flex-1 mr-3">
					<Text
						className="text-base font-semibold text-gray-900"
						numberOfLines={1}
					>
						{item.name}
					</Text>
					<Text className="text-xs text-gray-400 mt-0.5">{date}</Text>
				</View>
				<TouchableOpacity
					onPress={confirmDelete}
					hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
					className="p-1"
				>
					<Text className="text-danger text-lg">✕</Text>
				</TouchableOpacity>
			</View>

			<View className="flex-row items-center gap-2 mt-3">
				<View
					className={`px-2.5 py-1 rounded-full ${badgeClass.split(' ')[0]}`}
				>
					<Text className={`text-xs font-medium ${badgeClass.split(' ')[1]}`}>
						{item.category}
					</Text>
				</View>
				<Text className="text-xs text-gray-500">⏱ {item.duration} min</Text>
			</View>

			{item.notes ? (
				<Text
					className="text-xs text-gray-400 mt-2 leading-4"
					numberOfLines={2}
				>
					{item.notes}
				</Text>
			) : null}
		</View>
	);
}

function EmptyState() {
	return (
		<View className="flex-1 items-center justify-center py-24">
			<Text className="text-4xl mb-3">🏋️</Text>
			<Text className="text-gray-500 text-sm">
				Nenhum treino cadastrado ainda.
			</Text>
			<Text className="text-gray-400 text-xs mt-1">
				Toque em + para adicionar o primeiro.
			</Text>
		</View>
	);
}

export function WorkoutListScreen() {
	const { workouts, remove } = useWorkoutStore();
	const { navigate, goBack } = useNavigationStore();

	return (
		<View className="flex-1 bg-surface">
			{/* Header */}
			<View className="flex-row items-center justify-between px-6 pt-14 pb-4 bg-card border-b border-gray-100">
				<TouchableOpacity
					onPress={goBack}
					hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
				>
					<Text className="text-primary text-base">← Voltar</Text>
				</TouchableOpacity>
				<Text className="text-lg font-bold text-gray-900">Meus Treinos</Text>
				<TouchableOpacity onPress={() => navigate('WorkoutForm')}>
					<Text className="text-2xl text-primary font-light">+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={workouts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <WorkoutCard item={item} onDelete={remove} />}
				contentContainerClassName="px-6 pt-4 pb-8 flex-grow"
				ListEmptyComponent={<EmptyState />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
