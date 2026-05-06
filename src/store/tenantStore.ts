import { defaultTenant, type TenantConfig } from '@/types/tenant';
import { useStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { createMMKVStorage } from './createPersistedSlice';

interface TenantState {
	tenant: TenantConfig;
	setTenant: (tenant: TenantConfig) => void;
	resetTenant: () => void;
}

export const tenantStore = createStore<TenantState>()(
	persist(
		(set) => ({
			tenant: defaultTenant,
			setTenant: (tenant) => set({ tenant }),
			resetTenant: () => set({ tenant: defaultTenant }),
		}),
		{
			name: 'tenant-storage',
			storage: createMMKVStorage<TenantState>(),
		},
	),
);


export function useTenantStore(): TenantState;
export function useTenantStore<T>(selector: (state: TenantState) => T): T;
export function useTenantStore<T>(selector?: (state: TenantState) => T) {
	return useStore(tenantStore, selector!);
}