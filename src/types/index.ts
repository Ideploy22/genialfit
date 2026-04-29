export interface User {
	id: string;
	name: string;
	email: string;
	avatarUrl?: string;
}

export interface ApiError {
	message: string;
	code?: string;
	statusCode?: number;
}
