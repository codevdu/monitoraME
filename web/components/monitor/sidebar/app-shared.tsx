import type { ReactNode } from "react";
import { LayoutGridIcon, BarChart3Icon, SettingsIcon, HelpCircleIcon, BookOpenIcon, Users2Icon } from "lucide-react";

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

export const navGroups: SidebarNavGroup[] = [
	{
		label: "Geral",
		items: [
			{
				title: "Painel",
				path: "/monitor",
				icon: (
					<LayoutGridIcon
					/>
				),
			},
			{
				title: "Análise",
				path: "/monitor/analytics",
				icon: (
					<BarChart3Icon
					/>
				),
			},
			{
				title: "Usuários",
				path: "/monitor/users",
				icon: (
					<Users2Icon
					/>
				),
			},
		],
	},
	// {
	// 	label: "Workspace",
	// 	items: [
	// 		{
	// 			title: "Team",
	// 			path: "/admin/team",
	// 			icon: (
	// 				<UsersIcon
	// 				/>
	// 			),
	// 		},
	// 		{
	// 			title: "Integrations",
	// 			path: "/admin/integrations",
	// 			icon: (
	// 				<PlugIcon
	// 				/>
	// 			),
	// 		},
	// 		{
	// 			title: "API Keys",
	// 			path: "/admin/api-keys",
	// 			icon: (
	// 				<KeyRoundIcon
	// 				/>
	// 			),
	// 		},
	// 	],
	// },
	{
		label: "Administração",
		items: [
			{
				title: "Configurações",
				path: "/monitor/settings",
				icon: (
					<SettingsIcon
					/>
				),
			},
		],
	},
];

export const footerNavLinks: SidebarNavItem[] = [
	{
		title: "Help Center",
		path: "/admin/help",
		icon: (
			<HelpCircleIcon
			/>
		),
	},
	{
		title: "Documentation",
		path: "/admin/documentation",
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
