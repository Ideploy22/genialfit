import bolsa from '@/assets/images/bolsa.png';
import ArrowRight from '@/assets/svg/arrow-right.svg';
import { useTheme } from '@/hooks/useTheme';
import { AppNavigationProp, RootStackParamList } from '@/navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import { tv } from 'tailwind-variants';


interface CardProps {
	icon?: FC<SvgProps>;
	label?: string;
	title: string;
	nav?: keyof RootStackParamList;
	highlight?: boolean;
}

const variantCard = tv({
	slots: {
		cardRoot:
			'bg-white rounded-2xl shadow-[0px_0px_8px_0px_0000001C] px-4 py-6 min-h-[191px] max-w-[307px] justify-between relative',
		labelStyle: 'font-exo-bold text-g-400 text-lg',
		titleStyle: 'font-exo-bold text-g-800 text-2xl text-[28px] h-11',
	},
	variants: {
		highlight: {
			true: {
				cardRoot: 'bg-primary-1',
				labelStyle: '',
				titleStyle: 'text-white',
			},
		},
	},
});

export function Card(props: CardProps) {
	const { icon: Icon, label, title, nav, highlight = false } = props;
	const { cardRoot, labelStyle, titleStyle } = variantCard({ highlight });
	const navigation = useNavigation<AppNavigationProp>();
	const { primary1, primary2 } = useTheme();

	return (
		<TouchableOpacity
			className={cardRoot()}
			onPress={() => nav && navigation.navigate(nav)}
		>
			{Icon ? <Icon color={primary1} /> : <View></View>}
			<View className="flex-row justify-between w-full items-end">
				<View className="">
					<Text className={labelStyle()}>{label}</Text>
					<Text className={titleStyle()}>{title}</Text>
				</View>
				{highlight && (
					<Image className="absolute z-10 right-0" source={bolsa} />
				)}
				<ArrowRight color={primary2} />
			</View>
		</TouchableOpacity>
	);
}
