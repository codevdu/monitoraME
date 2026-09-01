import { z } from "zod";

export const idSchema = z.string().min(1);

// Payload de erro esperado do backend quando uma request falha.
export const apiErrorSchema = z.object({
	code: z.string().optional(),
	details: z.unknown().optional(),
	message: z.string().min(1).default("Erro inesperado."),
});

// Contrato compartilhado de paginação para endpoints de listagem.
export const paginationSchema = z.object({
	page: z.number().int().positive(),
	pageSize: z.number().int().positive(),
	totalItems: z.number().int().nonnegative(),
	totalPages: z.number().int().nonnegative(),
});

export const dateTimeSchema = z.string().min(1);

// Fábrica reutilizável de schemas para endpoints paginados.
export function paginatedResponseSchema<TItem extends z.ZodType>(
	itemSchema: TItem,
) {
	return z.object({
		data: z.array(itemSchema),
		meta: paginationSchema,
	});
}
