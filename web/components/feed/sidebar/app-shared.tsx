import type { ReactNode } from "react";
import { LayoutGridIcon, BarChart3Icon, SettingsIcon, CreditCardIcon, HelpCircleIcon, BookOpenIcon, Users2Icon, ShieldAlertIcon } from "lucide-react";

export type SidebarNavItem = {
	title: string;
	path?: string;
	icon?: ReactNode;
	isActive?: boolean;
	subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
	label?: string;
	items: SidebarNavItem[];
};
  // Todos os liks 
export const navGroups: SidebarNavGroup[] = [
	{
		label: "Geral",
		items: [
			{
				title: "Empresa",
				path: "/feed",
				icon: (
					<LayoutGridIcon
					/>
				),
			},
			{
				title: "Licitacoes",
				path: "/feed/licitacoes",
				icon: (
					<BarChart3Icon
					/>
				),
			},
			//Consultar Cnpj
			{
				title: "Usuários",
				path: "/feed/users",
				icon: (
					<Users2Icon
					/>
				),
			},
		],
	},
];

export const footerNavLinks: SidebarNavItem[] = [
	{
		title: "Help Center",
		path: "/feed/help",
		icon: (
			<HelpCircleIcon
			/>
		),
	},
	{
		title: "Documentation",
		path: "/feed/documentation",
		icon: (
			<BookOpenIcon
			/>
		),
	},
];

export const navLinks: SidebarNavItem[] = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) =>
			item.subItems?.length ? [item, ...item.subItems] : [item]
		)
	),
	...footerNavLinks,
];

export function isNavItemActive(item: SidebarNavItem, pathname: string): boolean {
	if (item.path === pathname) {
		return true;
	}

	return item.subItems?.some((subItem) => isNavItemActive(subItem, pathname)) ?? false;
}

export function getNavItemByPath(pathname: string): SidebarNavItem | undefined {
	return navLinks.find((item) => isNavItemActive(item, pathname));
}
