import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TenantThemeProvider } from '@/providers/TenantThemeProvider';
import { RootNavigator } from '@/navigation/RootNavigator';

export default function App() {
	return (
		<SafeAreaProvider>
			<TenantThemeProvider>
				<StatusBar barStyle="dark-content" />
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</TenantThemeProvider>
		</SafeAreaProvider>
	);
}
