import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { MenuScreen } from '@/features/menu/screens/MenuScreen';
import { MenuScreenTest } from '@/features/menu/screens/MenuScreenTest';

import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
	initialRouteName: 'HomeScreen',
	screenOptions: {
		headerShown: false,
		contentStyle: { backgroundColor: '#fff' },
	},
	screens: {
		HomeScreen,
		MenuScreen,
		MenuScreenTest
	},
});

const Navigation = createStaticNavigation(RootStack);

export function RootNavigator() {
	return (
		<Navigation />
	);
}

export type RootStackParamList = StaticParamList<typeof RootStack>;
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;


declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}