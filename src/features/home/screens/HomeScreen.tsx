import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import logo from '@/assets/images/logo.png';
import union from '@/assets/images/Union.png';
import { Button } from '@/components/ui/Button';
import type { RootStackParamList } from '@/navigation/RootNavigator';

export function HomeScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	return (
		<View className="flex-1 bg-surface">
			<View className="h-[70%] relative border-2 border-b-stone-900 rounded-b-[175px] overflow-hidden">
				<View className="absolute top-0 z-10 text-center w-full mt-28">
					<Text className="font-exo-bold text-white text-8xl mx-20">
						Seja a sua melhor versão
					</Text>
				</View>
				<View className="absolute bottom-60 z-10 text-center max-w-[70%]">
					<Text className="font-exo-bold text-white text-5xl mx-20">
						Descubra peças que combinam com o seu estilo. Compre direto no totem
						e evite filas.
					</Text>
				</View>
				<View className="absolute z-10 bottom-16 w-full gap-4 flex-row justify-center">
					{Array.from({ length: 4 }).map((_, index) => {
						let bg = 'bg-[#D9D9D96B]';
						switch (index) {
							case 0:
								bg = 'bg-primary-3';
								break;
							default:
								bg = 'bg-[#D9D9D96B]';
						}
						return (
							<View
								key={String(index)}
								className={`w-[135px] h-[7px] rounded-lg ${bg}`}
							></View>
						);
					})}
				</View>
				<Image source={union} className="w-full h-full" />
			</View>
			<View className="mb-8 mt-16 flex-1 justify-between">
				<View className="w-full justify-center items-center">
					<View>
						<Text className="font-exo-bold text-g-700 text-4xl text-center">
							Atenção
						</Text>
						<Text className="font-exo-semibold text-slate-400 text-4xl items-center justify-center text-center mx-12 m-6">
							Todos os processos são monitorados por câmeras e acompanhadas por
							nossos colaboradores.
						</Text>
					</View>
				</View>
				<Button
					label="Toque na tela para começar"
					className="mx-52"
					variant="primary"
					size="lg"
					onPress={() => navigation.navigate('Menu')}
				/>
				<View className="w-full justify-center items-center">
					<Image source={logo} />
				</View>
			</View>
		</View>
	);
}
