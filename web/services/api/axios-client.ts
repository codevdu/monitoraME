import axios, { type AxiosInstance } from "axios";
import type { ApiConfig } from "@/services/api/config";
import { toApiRequestError } from "@/services/api/errors";
import type {
	ApiRequestConfig,
	HttpClient,
	ResponseSchema,
} from "@/services/api/types";
import { parseResponse } from "@/services/api/validation";

export function createAxiosInstance(config: ApiConfig) {
	return axios.create(config);
}

// Adapter específico do Axios. Implementa HttpClient para isolar a UI dos detalhes do Axios.
export class AxiosApiClient implements HttpClient {
	constructor(private readonly client: AxiosInstance) {}

	async request<TData>(
		config: ApiRequestConfig,
		schema?: ResponseSchema<TData>,
	): Promise<TData> {
		try {
			const response = await this.client.request<unknown>(config);

			// A validação em runtime é opcional por chamada, mas fica perto do limite de transporte.
			return parseResponse(response.data, schema);
		} catch (error) {
			throw toApiRequestError(error);
		}
	}
}
