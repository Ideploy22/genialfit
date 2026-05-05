import { vars } from 'nativewind';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useTenantStore } from '@/store/tenantStore';

export function TenantThemeProvider({ children }: PropsWithChildren) {
  const { colors } = useTenantStore((s) => s.tenant);

  const themeVars = vars({
    '--color-primary-1': colors.primary1,
    '--color-primary-2': colors.primary2,
    '--color-primary-3': colors.primary3,
  });

  return (
    <View style={[{ flex: 1 }, themeVars]}>
      {children}
    </View>
  );
}
