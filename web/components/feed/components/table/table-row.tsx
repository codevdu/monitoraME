import type { Licitacao } from "@/components/feed/components/table/mock/table-mock";

interface LicitacoesTableRowProps {
	licitacao: Licitacao;
}
export const LicitacoesTableRow = ({
	licitacao,
}: LicitacoesTableRowProps) => {
	const valorFormatado = licitacao.valor.toLocaleString(
		"pt-BR",
		{
			style: "currency",
			currency: "BRL",
		},
	);

	const dataFormatada = new Date(
		`${licitacao.data}T00:00:00`,
	).toLocaleDateString("pt-BR");

	return (
		<tr className="border-b transition-colors hover:bg-muted/30">
			<td className="px-4 py-4">
				<div className="max-w-65">
					<p className="truncate text-sm font-medium">
						{licitacao.nome}
					</p>
					<p className="mt-1 text-xs text-muted-foreground">
						{licitacao.id}
					</p>
				</div>
			</td>

			<td className="px-4 py-4">
				<div>
					<p className="text-sm">
						{licitacao.municipio}
					</p>

					<p className="text-xs text-muted-foreground">
						{licitacao.uf}
					</p>
				</div>
			</td>

			{/* MODALIDADE */}
			<td className="px-4 py-4">
				<p className="text-sm">
					{licitacao.modalidade}
				</p>
			</td>

			{/* DATA */}
			<td className="px-4 py-4">
				<p className="whitespace-nowrap text-sm">
					{dataFormatada}
				</p>
			</td>

			{/* STATUS */}
			<td className="px-4 py-4">
				<StatusBadge status={licitacao.status} />
			</td>

			{/* VALOR */}
			<td className="px-4 py-4 text-right">
				<p className="whitespace-nowrap text-sm font-semibold">
					{valorFormatado}
				</p>
			</td>

		</tr>
	);
};

interface StatusBadgeProps {
	status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
	const statusClasses = {
		"Aberta":
			"bg-success/15 text-success",
		"Em andamento":
			"bg-warning/15 text-warning",
		"Encerrada":
			"bg-muted text-muted-foreground",
	};

	const className =
		statusClasses[
			status as keyof typeof statusClasses
		] ?? "bg-muted text-muted-foreground";

	return (
		<span
			className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${className}`}
		>
			<span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />

			{status}
		</span>
	);
};
