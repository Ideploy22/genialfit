import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import { TextField } from '@/components/ui/TextField';
import { useNavigationStore } from '@/store/navigationStore';
import { useWorkoutStore } from '../store/workoutStore';
import type { WorkoutFormData } from '../types';
import { WORKOUT_CATEGORIES, workoutSchema } from '../types/schemas';

export function WorkoutFormScreen() {
	const { add } = useWorkoutStore();
	const { goBack } = useNavigationStore();

	const { control, handleSubmit, reset } = useForm<WorkoutFormData>({
		resolver: zodResolver(workoutSchema),
		defaultValues: {
			name: '',
			category: undefined,
			duration: '',
			notes: '',
		},
	});

	const onSubmit = (data: WorkoutFormData) => {
		add(data);
		reset();
		goBack();
	};

	return (
		<KeyboardAvoidingView
			className="flex-1 bg-surface"
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			{/* Header */}
			<View className="flex-row items-center justify-between px-6 pt-14 pb-4 bg-card border-b border-gray-100">
				<TouchableOpacity
					onPress={goBack}
					hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
				>
					<Text className="text-primary text-base">← Cancelar</Text>
				</TouchableOpacity>
				<Text className="text-lg font-bold text-gray-900">Novo Treino</Text>
				<View className="w-16" />
			</View>

			<ScrollView
				contentContainerClassName="px-6 pt-6 pb-12"
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				<TextField
					control={control}
					name="name"
					label="Nome do treino"
					placeholder="Ex: Peito e Tríceps"
					returnKeyType="next"
					maxLength={60}
				/>

				<SelectField
					control={control}
					name="category"
					label="Categoria"
					options={WORKOUT_CATEGORIES}
				/>

				<TextField
					control={control}
					name="duration"
					label="Duração (minutos)"
					placeholder="Ex: 60"
					keyboardType="numeric"
					returnKeyType="next"
					maxLength={3}
				/>

				<TextField
					control={control}
					name="notes"
					label="Observações (opcional)"
					placeholder="Descreva detalhes do treino..."
					multiline
					numberOfLines={4}
					textAlignVertical="top"
					className="h-24 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900"
					returnKeyType="done"
					maxLength={300}
				/>

				<Button
					label="Salvar Treino"
					onPress={handleSubmit(onSubmit)}
					className="mt-2"
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
