import { tenantStore } from '@/store/tenantStore';
import axios from 'axios';

const BASE_URL = 'https://api.genialfit.com/v1';

export const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {

	const isXApiKey = config.headers['X-API-KEY'] !== undefined;


	if (!isXApiKey) {
		const apiKey = tenantStore.getState().tenant?.xApiKey;
		if (apiKey) {
			config.headers['X-API-KEY'] = apiKey;
		}
	}

	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const status = error.response?.status;
		// if (status === 401) {
		// 	storage.remove(TOKEN_KEY);
		// }
		return Promise.reject(error);
	},
);
