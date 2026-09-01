import axios from "axios";
import { apiErrorSchema } from "@/schemas";

// Formato de erro do app. Evita que a UI conheça detalhes internos do Axios.
export class ApiRequestError extends Error {
	readonly code?: string;
	readonly details?: unknown;
	readonly status?: number;

	constructor({
		code,
		details,
		message,
		status,
	}: {
		code?: string;
		details?: unknown;
		message: string;
		status?: number;
	}) {
		super(message);
		this.name = "ApiRequestError";
		this.code = code;
		this.details = details;
		this.status = status;
	}
}

// Converte falhas desconhecidas de transporte em um erro previsível para o app.
export function toApiRequestError(error: unknown): ApiRequestError {
	if (!axios.isAxiosError(error)) {
		return new ApiRequestError({
			message: error instanceof Error ? error.message : "Erro inesperado.",
		});
	}

	const parsedError = apiErrorSchema.safeParse(error.response?.data);

	// Prefere mensagens do backend quando elas seguem o schema compartilhado de erro.
	if (parsedError.success) {
		return new ApiRequestError({
			code: parsedError.data.code,
			details: parsedError.data.details,
			message: parsedError.data.message,
			status: error.response?.status,
		});
	}

	return new ApiRequestError({
		code: error.code,
		message: error.message || "Não foi possível concluir a requisição.",
		status: error.response?.status,
	});
}

export function getApiErrorMessage(error: unknown) {
	return error instanceof ApiRequestError
		? error.message
		: "Não foi possível concluir a requisição.";
}
