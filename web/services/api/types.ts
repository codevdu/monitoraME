import type { AxiosRequestConfig } from "axios";
import type { ZodType } from "zod";

export type ApiRequestConfig = AxiosRequestConfig;
export type ResponseSchema<TData> = ZodType<TData>;

export type RequestOptions<TData> = {
	config: ApiRequestConfig;
	schema?: ResponseSchema<TData>;
};

// Contrato de transporte usado pelo app. Pode ser implementado com Axios, fetch, mocks etc.
export interface HttpClient {
	request<TData>(
		config: ApiRequestConfig,
		schema?: ResponseSchema<TData>,
	): Promise<TData>;
}
