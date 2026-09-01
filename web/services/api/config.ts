export type ApiConfig = {
	baseURL: string;
	timeout: number;
	headers: Record<string, string>;
};

const DEFAULT_TIMEOUT_MS = 15_000;

// Centraliza as configurações de ambiente para manter adapters fáceis de trocar.
export function getApiConfig(): ApiConfig {
	return {
		baseURL: process.env.NEXT_PUBLIC_API_URL?.trim() || "/api",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		timeout: DEFAULT_TIMEOUT_MS,
	};
}
