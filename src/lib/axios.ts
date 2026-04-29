import axios from 'axios';
import { storage } from './storage';

const BASE_URL = 'https://api.genialfit.com/v1';
const TOKEN_KEY = 'auth_token';

export const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {
	const token = storage.getString(TOKEN_KEY);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const status = error.response?.status;
		if (status === 401) {
			storage.remove(TOKEN_KEY);
		}
		return Promise.reject(error);
	},
);
