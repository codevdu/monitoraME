import type { LinkItemType } from "@/components/hero/sheard";
import { GlobeIcon, LayersIcon, UserPlusIcon, BarChart3Icon, PlugIcon, CodeIcon, UsersIcon, StarIcon, HandshakeIcon, FileTextIcon, ShieldIcon, RotateCcwIcon, LeafIcon, HelpCircleIcon } from "lucide-react";

export const productLinks: LinkItemType[] = [
	{
		label: "Gestão de informações",
		href: "#",
		description: "Organize dados, registros e comunicações em um só lugar",
		icon: (
			<GlobeIcon
			/>
		),
	},
	{
		label: "Divulgação pública",
		href: "#",
		description: "Apoie a publicação e o acompanhamento de informações",
		icon: (
			<LayersIcon
			/>
		),
	},
	{
		label: "Colaboração",
		href: "#",
		description: "Coordene equipes, responsáveis e fluxos internos",
		icon: (
			<UserPlusIcon
			/>
		),
	},
	{
		label: "Análises",
		href: "#",
		description: "Acompanhe indicadores e histórico de movimentações",
		icon: (
			<BarChart3Icon
			/>
		),
	},
	{
		label: "Integrações",
		href: "#",
		description: "Conecte sistemas e fontes de dados relevantes",
		icon: (
			<PlugIcon
			/>
		),
	},
	{
		label: "API",
		href: "#",
		description: "Crie integrações sob medida para sua operação",
		icon: (
			<CodeIcon
			/>
		),
	},
];

export const companyLinks: LinkItemType[] = [
	{
		label: "Sobre a plataforma",
		href: "#",
		description: "Conheça a proposta e os limites de uso do MonitoraME",
		icon: (
			<UsersIcon
			/>
		),
	},
	{
		label: "Casos de uso",
		href: "#",
		description: "Veja como equipes podem estruturar rotinas de acompanhamento",
		icon: (
			<StarIcon
			/>
		),
	},
	{
		label: "Parcerias",
		href: "#",
		icon: (
			<HandshakeIcon
			/>
		),
		description: "Converse sobre cooperação técnica e institucional",
	},
];

export const companyLinks2: LinkItemType[] = [
	{
		label: "Termos de uso",
		href: "#",
		icon: (
			<FileTextIcon
			/>
		),
	},
	{
		label: "Política de privacidade",
		href: "#",
		icon: (
			<ShieldIcon
			/>
		),
	},
	{
		label: "Política comercial",
		href: "#",
		icon: (
			<RotateCcwIcon
			/>
		),
	},
	{
		label: "Blog",
		href: "#",
		icon: (
			<LeafIcon
			/>
		),
	},
	{
		label: "Central de ajuda",
		href: "#",
		icon: (
			<HelpCircleIcon
			/>
		),
	},
];
