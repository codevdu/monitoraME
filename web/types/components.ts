import type { ReactNode } from "react";

export type SearchParams = Record<string, string | string[] | undefined>;

export type ServerPageProps<
	TParams extends Record<string, string> = Record<string, string>,
	TSearchParams extends SearchParams = SearchParams,
> = {
	params: Promise<TParams>;
	searchParams?: Promise<TSearchParams>;
};

export type ServerLayoutProps = {
	children: ReactNode;
};

export type ClientComponentProps = {
	children?: ReactNode;
	className?: string;
};
