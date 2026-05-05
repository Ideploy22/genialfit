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
}

export const defaultTenant: TenantConfig = {
  id: 'default',
  name: 'Genialfit',
  logoUrl: '',
  colors: {
    primary1: '#4F46E5',
    primary2: '#10B981',
    primary3: '#F59E0B',
  },
};
