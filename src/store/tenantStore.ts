import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultTenant, type TenantConfig } from '@/types/tenant';
import { mmkvStorage } from './createPersistedSlice';

interface TenantState {
	tenant: TenantConfig;
	setTenant: (tenant: TenantConfig) => void;
	resetTenant: () => void;
}

export const useTenantStore = create<TenantState>()(
	persist(
		(set) => ({
			tenant: defaultTenant,
			setTenant: (tenant) => set({ tenant }),
			resetTenant: () => set({ tenant: defaultTenant }),
		}),
		{
			name: 'tenant-storage',
			storage: mmkvStorage,
		},
	),
);
