import { useTenantStore } from '@/store/tenantStore';

export function useTheme() {
	const { colors } = useTenantStore((s) => s.tenant);

	return {
		primary1: colors.primary1,
		primary2: colors.primary2,
		primary3: colors.primary3,
	};
}
