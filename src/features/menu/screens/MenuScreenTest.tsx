import headerMenu from '@/assets/images/header-menu.png';
import logo from '@/assets/images/logo-negativo.png';
import person from '@/assets/images/person.png';
import AlunoIcon from '@/assets/svg/aluno.svg';
import HalterIcon from '@/assets/svg/halter.svg';
import PercentageIcon from '@/assets/svg/percentage.svg';
import RecordIcon from '@/assets/svg/record.svg';
import UserIcon from '@/assets/svg/user.svg';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../components/Card';


type Props = StaticScreenProps<{
	test: string;
}>

export function MenuScreenTest({ route }: Props) {
	const navigation = useNavigation();

	const { test } = route.params;

	return (
		<View className="flex-1 bg-[#fafafa]">
			{/*Header do menu*/}
			<View className="w-full items-center bg-[#F3F3F3] h-[440px]">
				<View className="w-full relative justify-center items-center">
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className="absolute left-6 z-20 flex-row items-center gap-2"
					>
						<Text className="font-exo-bold text-white text-2xl">{'←'}</Text>
						<Text className="font-exo-semibold text-white text-xl">Voltar</Text>
					</TouchableOpacity>
					<Image source={logo} className="h-[82px] bg-center absolute z-10" />
					<Image source={headerMenu} className="w-full h-[163px] bg-center" />
				</View>
				<View className="flex-row items-end flex-1 gap-8">
					<Image source={person} className="" />
					<View className="h-full w-[62%] justify-center">
						<Text className="font-exo-bold text-[48px]">
							Como você deseja começar?  {test}
						</Text>
						<Text className="font-exo-semibold text-g-400 text-[25px] text-wrap">
							Use o totem para check-in, acessar treinos ou contratar serviços
							de forma rápida e fácil.
						</Text>
					</View>
				</View>
			</View>

			{/*Menu*/}
			<View className="w-full flex-1 mx-14 mt-14">
				<Text className="font-exo-bold text-g-800 text-4xl">
					Selecione a ação
				</Text>
				<View className="mt-8 flex-row flex-wrap gap-6">
					<Card icon={UserIcon} label="" title="Já sou cliente" />
					<Card icon={AlunoIcon} label="Aluno de" title="Agregadores" />
					<Card label="Nossos" title="Produtos" highlight />
					<Card icon={RecordIcon} label="Efetuar" title="Cadastro" />
					<Card icon={HalterIcon} label="" title="Acessar treino" />
					<Card icon={PercentageIcon} label="" title="Promoções" />
				</View>
			</View>
		</View>
	);
}
