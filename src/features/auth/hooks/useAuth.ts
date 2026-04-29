import { storage } from '@/lib/storage';
import { authService } from '../services/authService';
import { useAuthStore } from '../store/authStore';

const TOKEN_KEY = 'auth_token';

// Credenciais de desenvolvimento (sem backend)
const DEV_CREDENTIALS = {
	email: 'teste@genialfit.com',
	password: '123456',
};

const DEV_USER = {
	id: '1',
	name: 'Atleta Dev',
	email: DEV_CREDENTIALS.email,
};

export function useAuth() {
	const {
		user,
		token,
		isAuthenticated,
		isLoading,
		setCredentials,
		logout: storeLogout,
		setLoading,
	} = useAuthStore();

	const login = async (email: string, password: string) => {
		try {
			setLoading(true);

			if (__DEV__) {
				await new Promise((resolve) => setTimeout(resolve, 600));
				if (
					email === DEV_CREDENTIALS.email &&
					password === DEV_CREDENTIALS.password
				) {
					storage.set(TOKEN_KEY, 'dev-token');
					setCredentials(DEV_USER, 'dev-token');
					return;
				}
				throw new Error('Credenciais inválidas');
			}

			const { user: loggedUser, token: authToken } = await authService.login({
				email,
				password,
			});
			storage.set(TOKEN_KEY, authToken);
			setCredentials(loggedUser, authToken);
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		try {
			if (!__DEV__) await authService.logout();
		} catch {
			// Silently continue on logout errors
		} finally {
			storage.remove(TOKEN_KEY);
			storeLogout();
		}
	};

	return { user, token, isAuthenticated, isLoading, login, logout };
}
