import {
	type Control,
	Controller,
	type FieldValues,
	type Path,
} from 'react-hook-form';
import { Text, TextInput, type TextInputProps, View } from 'react-native';
import { tv } from 'tailwind-variants';

const textField = tv({
	slots: {
		input: 'h-12 px-4 rounded-xl border bg-white text-gray-900',
	},
	variants: {
		error: {
			true: { input: 'border-danger' },
			false: { input: 'border-gray-200' },
		},
	},
	defaultVariants: {
		error: false,
	},
});

interface TextFieldProps<T extends FieldValues> extends TextInputProps {
	control: Control<T>;
	name: Path<T>;
	label?: string;
}

export function TextField<T extends FieldValues>({
	control,
	name,
	label,
	...inputProps
}: TextFieldProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { onChange, onBlur, value },
				fieldState: { error },
			}) => {
				const { input } = textField({ error: !!error });
				return (
					<View className="mb-4">
						{label && (
							<Text className="text-sm font-medium text-gray-700 mb-1">
								{label}
							</Text>
						)}
						<TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							className={input()}
							placeholderTextColor="#9CA3AF"
							{...inputProps}
						/>
						{error && (
							<Text className="text-xs text-danger mt-1">{error.message}</Text>
						)}
					</View>
				);
			}}
		/>
	);
}
