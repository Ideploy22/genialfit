import { z } from 'zod';

export const WORKOUT_CATEGORIES = [
	'Musculação',
	'Cardio',
	'Funcional',
	'Flexibilidade',
] as const;

export const workoutSchema = z.object({
	name: z
		.string({ required_error: 'Nome obrigatório' })
		.min(2, 'Nome muito curto')
		.max(60, 'Nome muito longo'),
	category: z.enum(WORKOUT_CATEGORIES, {
		required_error: 'Selecione uma categoria',
	}),
	duration: z
		.string({ required_error: 'Duração obrigatória' })
		.regex(/^\d+$/, 'Somente números')
		.refine((v) => Number(v) >= 1, 'Mínimo 1 minuto')
		.refine((v) => Number(v) <= 600, 'Máximo 600 minutos'),
	notes: z.string().max(300, 'Máximo 300 caracteres').optional(),
});
