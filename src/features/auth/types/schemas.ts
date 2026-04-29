import { z } from 'zod';

export const loginSchema = z.object({
	email: z.email('E-mail inválido').min(1, 'E-mail obrigatório'),
	password: z
		.string()
		.nonempty('Senha obrigatória')
		.min(6, 'Senha deve ter ao menos 6 caracteres'),
});

export const registerSchema = z
	.object({
		name: z.string('Nome obrigatório').min(2, 'Nome muito curto'),
		email: z.email('E-mail inválido').min(1, 'E-mail obrigatório'),
		password: z
			.string('Senha obrigatória')
			.min(6, 'Senha deve ter ao menos 6 caracteres'),
		confirmPassword: z.string('Confirmação obrigatória'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não coincidem',
		path: ['confirmPassword'],
	});
