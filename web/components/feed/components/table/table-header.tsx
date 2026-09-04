import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type CampoOrdenacao = "nome" | "municipio" | "modalidade" | "data" | "valor";

type DirecaoOrdenacao = "asc" | "desc";

interface LicitacoesTableHeaderProps {
	campoOrdenacao: CampoOrdenacao | null;
	direcaoOrdenacao: DirecaoOrdenacao;
	ordenarPor: (campo: CampoOrdenacao) => void;
}

export const LicitacoesTableHeader = ({ campoOrdenacao, direcaoOrdenacao, ordenarPor }: LicitacoesTableHeaderProps) => {
	const renderIconeOrdenacao = (campo: CampoOrdenacao) => {
		if (campoOrdenacao !== campo) {
			return <ArrowUpDown className="size-3.5" />;
		}

		return direcaoOrdenacao === "asc" ? <ArrowUp className="size-3.5" /> : <ArrowDown className="size-3.5" />;
	};

	return (
		<thead>
			<tr className="border-b bg-muted/40">
				<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
					<button type="button" onClick={() => ordenarPor("nome")} className="flex items-center gap-1.5 rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
						Licitação
						{renderIconeOrdenacao("nome")}
					</button>
				</th>

				<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
					<button type="button" onClick={() => ordenarPor("municipio")} className="flex items-center gap-1.5 rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
						Município
						{renderIconeOrdenacao("municipio")}
					</button>
				</th>

				<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
					<button type="button" onClick={() => ordenarPor("modalidade")} className="flex items-center gap-1.5 rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
						Modalidade
						{renderIconeOrdenacao("modalidade")}
					</button>
				</th>

				<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
					<button type="button" onClick={() => ordenarPor("data")} className="flex items-center gap-1.5 rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
						Data
						{renderIconeOrdenacao("data")}
					</button>
				</th>

				<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
					Status
				</th>

				<th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
					<button type="button" onClick={() => ordenarPor("valor")} className="ml-auto flex items-center gap-1.5 rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
						Valor
						{renderIconeOrdenacao("valor")}
					</button>
				</th>
			</tr>
		</thead>
	);
};
