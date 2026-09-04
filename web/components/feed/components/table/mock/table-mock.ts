export interface Licitacao {
	id: string;
	nome: string;
	porte: string;
	valor: number;
	data: string;
	municipio: string;
	uf: string;
	status: string;
	modalidade: string;
	objeto: string;
}

export const licitacoesMock: Licitacao[] = [
	{
		id: "LIC-001",
		nome: "Aquisição de materiais escolares",
		porte: "Pequeno Porte",
		valor: 45000,
		data: "2026-09-10",
		municipio: "Amontada",
		uf: "CE",
		status: "Aberta",
		modalidade: "Pregão Eletrônico",
		objeto:
			"Aquisição de materiais escolares destinados às unidades da rede municipal de ensino.",
	},
	// {
	// 	id: "LIC-002",
	// 	nome: "Contratação de serviços de limpeza",
	// 	porte: "Médio Porte",
	// 	valor: 128500,
	// 	data: "2026-09-15",
	// 	municipio: "Itapipoca",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Pregão Eletrônico",
	// 	objeto:
	// 		"Contratação de empresa especializada para prestação de serviços de limpeza e conservação dos prédios públicos municipais.",
	// },

	// {
	// 	id: "LIC-003",
	// 	nome: "Fornecimento de equipamentos de informática",
	// 	porte: "Grande Porte",
	// 	valor: 350000,
	// 	data: "2026-09-18",
	// 	municipio: "Fortaleza",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Concorrência",
	// 	objeto:
	// 		"Registro de preços para aquisição de computadores, notebooks, monitores e demais equipamentos de informática.",
	// },

	// {
	// 	id: "LIC-004",
	// 	nome: "Aquisição de merenda escolar",
	// 	porte: "Médio Porte",
	// 	valor: 215750,
	// 	data: "2026-09-22",
	// 	municipio: "Miraíma",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Pregão Eletrônico",
	// 	objeto:
	// 		"Aquisição de gêneros alimentícios destinados à alimentação escolar dos alunos da rede municipal.",
	// },

	// {
	// 	id: "LIC-006",
	// 	nome: "Reforma de unidade escolar",
	// 	porte: "Grande Porte",
	// 	valor: 580000,
	// 	data: "2026-09-25",
	// 	municipio: "Sobral",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Concorrência",
	// 	objeto:
	// 		"Contratação de empresa especializada para execução de reforma e adequação de unidade escolar municipal.",
	// },
	// {
	// 	id: "LIC-007",
	// 	nome: "Reforma de unidade escolar",
	// 	porte: "Grande Porte",
	// 	valor: 580000,
	// 	data: "2026-09-25",
	// 	municipio: "Sobral",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Concorrência",
	// 	objeto:
	// 		"Contratação de empresa especializada para execução de reforma e adequação de unidade escolar municipal.",
	// },
	// {
	// 	id: "LIC-008",
	// 	nome: "Reforma de unidade escolar",
	// 	porte: "Grande Porte",
	// 	valor: 580000,
	// 	data: "2026-09-25",
	// 	municipio: "Sobral",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Concorrência",
	// 	objeto:
	// 		"Contratação de empresa especializada para execução de reforma e adequação de unidade escolar municipal.",
	// },
	// {
	// 	id: "LIC-009",
	// 	nome: "Reforma de unidade escolar",
	// 	porte: "Grande Porte",
	// 	valor: 580000,
	// 	data: "2026-09-25",
	// 	municipio: "Sobral",
	// 	uf: "CE",
	// 	status: "Aberta",
	// 	modalidade: "Concorrência",
	// 	objeto:
	// 		"Contratação de empresa especializada para execução de reforma e adequação de unidade escolar municipal.",
	// },
];