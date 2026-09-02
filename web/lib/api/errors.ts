export class ApiError extends Error {
    public statusCode: number;
    public data?: any;

    constructor(message: string, statusCode: number, data?: any) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.data = data;
    }
}

export function parseApiError(error: any): ApiError {
    if (error.response) {
        const status = error.response.status
        const message = error.response.data?.message || 'Erro inesperado no servidor.'
        const data = error.response.data

        return new ApiError(message, status, data)
    } else if (error.request) {
        return new ApiError('Não foi possível conectar ao servidor.', 0)
    }

    return new ApiError('Erro ao configurar a requisição.', 0)
}