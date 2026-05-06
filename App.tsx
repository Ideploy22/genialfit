import { RootNavigator } from '@/navigation/RootNavigator';
import { TenantThemeProvider } from '@/providers/TenantThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './global.css';

export default function App() {
	return (
		<SafeAreaProvider>
			<TenantThemeProvider>
				<RootNavigator />
			</TenantThemeProvider>
		</SafeAreaProvider>
	);
}
