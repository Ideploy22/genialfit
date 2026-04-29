import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from 'react-native';
import { tv } from 'tailwind-variants';

const button = tv({
	slots: {
		root: 'h-12 rounded-xl flex-row items-center justify-center gap-2',
		label: 'font-semibold text-base',
	},
	variants: {
		variant: {
			primary: {
				root: 'bg-primary',
				label: 'text-white',
			},
			outline: {
				root: 'border border-primary bg-transparent',
				label: 'text-primary',
			},
			ghost: {
				root: 'bg-transparent',
				label: 'text-primary',
			},
		},
		disabled: {
			true: {
				root: 'opacity-50',
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

interface ButtonProps extends TouchableOpacityProps {
	label: string;
	loading?: boolean;
	variant?: 'primary' | 'outline' | 'ghost';
}

export function Button({
	label,
	loading = false,
	variant = 'primary',
	disabled,
	className,
	...props
}: ButtonProps) {
	const isDisabled = disabled || loading;
	const { root, label: labelStyle } = button({ variant, disabled: isDisabled });

	return (
		<TouchableOpacity
			className={root({ className })}
			activeOpacity={0.8}
			disabled={isDisabled}
			{...props}
		>
			{loading && (
				<ActivityIndicator color={variant === 'primary' ? '#fff' : '#4F46E5'} />
			)}
			<Text className={labelStyle()}>{label}</Text>
		</TouchableOpacity>
	);
}
