import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export function MenuScreen() {
	const navigation = useNavigation();

	return (
		<View className="flex-1 bg-surface">
			<View className="pt-14 px-6">
				<TouchableOpacity onPress={() => navigation.goBack()} className="self-start p-2">
					<Text className="font-exo-bold text-g-700 text-2xl">{'← Voltar'}</Text>
				</TouchableOpacity>
			</View>
			<View className="flex-1 items-center justify-center">
				<Text className="font-exo-bold text-g-700 text-4xl">Menu</Text>
			</View>
		</View>
	);
}
