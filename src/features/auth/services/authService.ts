import { api } from '@/lib/axios';
import type { User } from '@/types';

interface LoginPayload {
	email: string;
	password: string;
}

interface AuthResponse {
	user: User;
	token: string;
}

export const authService = {
	login: async (payload: LoginPayload): Promise<AuthResponse> => {
		const { data } = await api.post<AuthResponse>('/auth/login', payload);
		return data;
	},

	register: async (
		payload: LoginPayload & { name: string },
	): Promise<AuthResponse> => {
		const { data } = await api.post<AuthResponse>('/auth/register', payload);
		return data;
	},

	logout: async (): Promise<void> => {
		await api.post('/auth/logout');
	},

	me: async (): Promise<User> => {
		const { data } = await api.get<User>('/auth/me');
		return data;
	},
};
