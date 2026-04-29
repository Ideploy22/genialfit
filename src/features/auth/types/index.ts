import type { z } from 'zod';
import type { loginSchema, registerSchema } from './schemas';

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
