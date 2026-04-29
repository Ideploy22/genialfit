import {
	type Control,
	Controller,
	type FieldValues,
	type Path,
} from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { tv } from 'tailwind-variants';

const chip = tv({
	slots: {
		root: 'px-4 py-2 rounded-full border',
		label: 'text-sm font-medium',
	},
	variants: {
		selected: {
			true: {
				root: 'bg-primary border-primary',
				label: 'text-white',
			},
			false: {
				root: 'bg-white border-gray-200',
				label: 'text-gray-600',
			},
		},
	},
	defaultVariants: {
		selected: false,
	},
});

interface SelectFieldProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	options: readonly string[];
}

export function SelectField<T extends FieldValues>({
	control,
	name,
	label,
	options,
}: SelectFieldProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<View className="mb-4">
					{label && (
						<Text className="text-sm font-medium text-gray-700 mb-2">
							{label}
						</Text>
					)}
					<View className="flex-row flex-wrap gap-2">
						{options.map((option) => {
							const { root, label: labelStyle } = chip({
								selected: value === option,
							});
							return (
								<TouchableOpacity
									key={option}
									onPress={() => onChange(option)}
									activeOpacity={0.75}
									className={root()}
								>
									<Text className={labelStyle()}>{option}</Text>
								</TouchableOpacity>
							);
						})}
					</View>
					{error && (
						<Text className="text-xs text-danger mt-1">{error.message}</Text>
					)}
				</View>
			)}
		/>
	);
}
