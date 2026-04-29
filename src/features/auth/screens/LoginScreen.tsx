import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { useAuth } from '../hooks/useAuth';
import type { LoginFormData } from '../types';
import { loginSchema } from '../types/schemas';

export function LoginScreen() {
	const { login, isLoading } = useAuth();

	const { control, handleSubmit } = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: '', password: '' },
	});

	const onSubmit = async ({ email, password }: LoginFormData) => {
		try {
			await login(email, password);
		} catch {
			Alert.alert('Erro', 'E-mail ou senha inválidos.');
		}
	};

	return (
		<KeyboardAvoidingView
			className="flex-1 bg-surface"
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ScrollView
				contentContainerClassName="flex-grow justify-center px-6 py-12"
				keyboardShouldPersistTaps="handled"
			>
				{/* Header */}
				<View className="mb-10">
					<Text className="text-4xl font-bold text-primary">Genialfit</Text>
					<Text className="text-gray-500 mt-1">Faça login para continuar</Text>
				</View>

				{/* Form */}
				<View>
					<TextField
						control={control}
						name="email"
						label="E-mail"
						placeholder="seu@email.com"
						keyboardType="email-address"
						autoCapitalize="none"
						autoComplete="email"
					/>
					<TextField
						control={control}
						name="password"
						label="Senha"
						placeholder="••••••••"
						secureTextEntry
						autoComplete="password"
					/>

					<Button
						variant="primary"
						label="Entrar"
						loading={isLoading}
						onPress={handleSubmit(onSubmit)}
						className="mt-2"
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
