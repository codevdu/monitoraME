"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/admin/sidebar/logo";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { footerNavLinks, navGroups } from "@/components/admin/sidebar/app-shared";
import { NavGroup } from "@/components/admin/sidebar/nav-group";
import { isNavItemActive } from "@/components/admin/sidebar/app-shared";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AppSidebarProps = ComponentProps<typeof Sidebar>;

export function AppSidebar({
	className,
	collapsible = "icon",
	variant = "sidebar",
	...props
}: AppSidebarProps) {
	const pathname = usePathname();

	return (
		<Sidebar
			className={cn(
				"*:data-[slot=sidebar-inner]:bg-background",
				"*:data-[slot=sidebar-inner]:dark:bg-[radial-gradient(60%_18%_at_10%_0%,--theme(--color-foreground/.08),transparent)]",
				"**:data-[slot=sidebar-menu-button]:[&>span]:text-foreground/75",
				className
			)}
			collapsible={collapsible}
			variant={variant}
			{...props}
		>
			<SidebarHeader className="h-14 justify-center border-b px-2">
				<SidebarMenuButton render={<Link href="/admin" />}><LogoIcon /><span className="font-medium text-foreground!">MonitoraME</span></SidebarMenuButton>
			</SidebarHeader>
			<SidebarContent>
				{navGroups.map((group, index) => (
					<NavGroup key={`sidebar-group-${index}`} {...group} />
				))}
			</SidebarContent>
			<SidebarFooter className="gap-0 p-0">
				<SidebarMenu className="border-t p-2">
					{footerNavLinks.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton className="text-muted-foreground" isActive={isNavItemActive(item, pathname)} size="sm" render={<Link href={item.path ?? "#"} />}>{item.icon}<span>{item.title}</span></SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
