"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { LogoContent, LogoIcon } from "@/components/logo";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { footerNavLinks, navGroups } from "@/components/monitor/sidebar/app-shared";
import { NavGroup } from "@/components/monitor/sidebar/nav-group";
import { isNavItemActive } from "@/components/monitor/sidebar/app-shared";
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
				<SidebarMenuButton
					aria-label="MonitoraME"
					className="h-10 text-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! *:data-logo-content:h-4 *:data-logo-content:w-auto *:data-logo-icon:h-4 *:data-logo-icon:w-auto"
					render={<Link href="/monitor" />}
				>
					<LogoIcon aria-hidden="true" className="shrink-0" data-logo-icon="true" />
					<LogoContent
						aria-hidden="true"
						className="shrink-0 group-data-[collapsible=icon]:hidden"
						data-logo-content="true"
					/>
				</SidebarMenuButton>
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
