"use client";

import { useMemo, useState } from "react";
import { licitacoesMock } from "@/components/feed/components/table/mock/table-mock";
import { LicitacoesTableHeader } from "@/components/feed/components/table/table-header";
import { LicitacoesTableRow } from "@/components/feed/components/table/table-row";
import { LicitacoesTablePagination } from "@/components/feed/components/table/table-pagination";

type CampoOrdenacao = "nome" | "municipio" | "modalidade" | "data" | "valor";
type DirecaoOrdenacao = "asc" | "desc";

export const LicitacoesTable = () => {
	const [campoOrdenacao, setCampoOrdenacao] = useState<CampoOrdenacao | null>(null);
	const [direcaoOrdenacao, setDirecaoOrdenacao] = useState<DirecaoOrdenacao>("asc");
	const [pagina, setPagina] = useState(1);
	const itensPorPagina = 6;
	const ordenarPor = (campo: CampoOrdenacao) => {
		if (campoOrdenacao === campo) {
			setDirecaoOrdenacao((direcao) => (direcao === "asc" ? "desc" : "asc"));
			return;
		}

		setCampoOrdenacao(campo);
		setDirecaoOrdenacao("asc");
		setPagina(1);
	};

	const licitacoesOrdenadas = useMemo(() => {
		const dados = [...licitacoesMock];

		if (!campoOrdenacao) {
			return dados;
		}

		return dados.sort((a, b) => {
			let comparacao = 0;

			if (campoOrdenacao === "nome") {
				comparacao = a.nome.localeCompare(b.nome, "pt-BR");
			}
			if (campoOrdenacao === "municipio") {
				comparacao = a.municipio.localeCompare(b.municipio, "pt-BR");
			}
			if (campoOrdenacao === "modalidade") {
				comparacao = a.modalidade.localeCompare(b.modalidade, "pt-BR");
			}
			if (campoOrdenacao === "data") {
				comparacao = new Date(a.data).getTime() - new Date(b.data).getTime();
			}
			if (campoOrdenacao === "valor") {
				comparacao = a.valor - b.valor;
			}

			return direcaoOrdenacao === "asc" ? comparacao : -comparacao;
		});
	}, [campoOrdenacao, direcaoOrdenacao]);

  //Usar em outro aquivo, que ficará em cima da tabela, para mostrar a quantidade de licitações
	const totalPaginas = Math.ceil(licitacoesOrdenadas.length / itensPorPagina);
	const licitacoesPaginadas = useMemo(() => {
		const inicio = (pagina - 1) * itensPorPagina;
		const fim = inicio + itensPorPagina;

		return licitacoesOrdenadas.slice(inicio, fim);
	}, [licitacoesOrdenadas, pagina]);

	return (
		<div className="w-full space-y-4 text-card-foreground">
			<div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
				<div className="w-full min-h-119.25 overflow-x-auto">
					<table className="w-full min-w-225 border-collapse">
						<LicitacoesTableHeader campoOrdenacao={campoOrdenacao} direcaoOrdenacao={direcaoOrdenacao} ordenarPor={ordenarPor} />
						<tbody>
							{licitacoesPaginadas.map((licitacao) => (
								<LicitacoesTableRow key={licitacao.id} licitacao={licitacao} />
							))}
						</tbody>
					</table>
				</div>

				<LicitacoesTablePagination pagina={pagina} totalPaginas={totalPaginas} onPaginaChange={setPagina} />
			</div>
		</div>
	);
};
