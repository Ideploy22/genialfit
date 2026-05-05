import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from '@/features/menu/screens/MenuScreen';
import { HomeScreen } from '@/features/home/screens/HomeScreen';

export type RootStackParamList = {
	Home: undefined;
	Menu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
		</Stack.Navigator>
	);
}
