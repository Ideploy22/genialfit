export interface TenantColors {
	primary1: string;
	primary2: string;
	primary3: string;
}

export interface TenantConfig {
	id: string;
	name: string;
	logoUrl: string;
	colors: TenantColors;
	xApiKey: string;
}

export const defaultTenant: TenantConfig = {
	id: 'default',
	name: 'Genialfit',
	logoUrl: '',
	xApiKey: '',
	colors: {
		primary1: '#20386c',
		primary2: '#b81c47',
		primary3: '#c71f3b',
	},
};
