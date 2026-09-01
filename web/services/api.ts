import { AxiosApiClient, createAxiosInstance } from "@/services/api/axios-client";
import { getApiConfig } from "@/services/api/config";
import type {
	ApiRequestConfig,
	HttpClient,
	ResponseSchema,
} from "@/services/api/types";

// Ponto público de composição da API: consumidores importam daqui, não do adapter Axios.
const axiosInstance = createAxiosInstance(getApiConfig());

export const api: HttpClient = new AxiosApiClient(axiosInstance);

// Helper para chamadas simples, ainda permitindo validação por schema em cada request.
export function apiRequest<TData>(
	config: ApiRequestConfig,
	schema?: ResponseSchema<TData>,
) {
	return api.request(config, schema);
}

export * from "@/services/api/errors";
export * from "@/services/api/types";
