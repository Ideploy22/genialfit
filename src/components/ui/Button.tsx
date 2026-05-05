import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from 'react-native';
import { tv } from 'tailwind-variants';

const button = tv({
	slots: {
		root: 'rounded-2xl flex-row items-center justify-center gap-2',
		label: 'font-exo-bold',
	},
	variants: {
		variant: {
			primary: {
				root: 'bg-primary-1',
				label: 'text-white',
			},
			secundary: {
				root: 'bg-g-200',
				label: 'text-g-700',
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
		size: {
			sm: {
				root: 'h-11',
				label: 'text-base',
			},
			md: {
				root: 'h-16',
				label: 'text-2xl',
			},
			lg: {
				root: 'h-24',
				label: 'text-4xl',
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
		size: 'md',
	},
});

interface ButtonProps extends TouchableOpacityProps {
	label: string;
	loading?: boolean;
	variant?: 'primary' | 'outline' | 'ghost' | 'secundary';
	size?: 'sm' | 'md' | 'lg';
}

export function Button({
	label,
	loading = false,
	variant = 'primary',
	size = 'md',
	disabled,
	className,
	...props
}: ButtonProps) {
	const isDisabled = disabled || loading;
	const { root, label: labelStyle } = button({
		variant,
		size,
		disabled: isDisabled,
	});

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
