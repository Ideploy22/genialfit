/**
 * Centralized app configuration.
 * In production replace with react-native-config or similar.
 */
export const env = {
	API_BASE_URL: 'https://api.genialfit.com/v1',
	APP_ENV: __DEV__ ? 'development' : 'production',
} as const;
