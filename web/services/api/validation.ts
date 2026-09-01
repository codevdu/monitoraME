import type { ResponseSchema } from "@/services/api/types";

// Aplica validação em runtime apenas quando o chamador fornece um schema.
export function parseResponse<TData>(
	data: unknown,
	schema?: ResponseSchema<TData>,
): TData {
	if (!schema) {
		return data as TData;
	}

	return schema.parse(data);
}
