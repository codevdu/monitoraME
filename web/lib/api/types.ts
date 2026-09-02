export interface DefaultResponse<T = any> {
    data: T;
    message?: string;
    status: 'success' | 'error';
}

export interface PaginatedResponse<T> extends DefaultResponse<T> {
    meta: {
        total: number;
        page: number;
        last_page: number;
    };
}