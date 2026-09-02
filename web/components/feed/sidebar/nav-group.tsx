"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
	isNavItemActive,
	type SidebarNavItem,
	type SidebarNavGroup,
} from "@/components/feed/sidebar/app-shared";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavGroup({ label, items }: SidebarNavGroup) {
	const pathname = usePathname();

	return (
		<SidebarGroup>
			{label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
			<SidebarMenu>
				{items.map((item) => (
					<NavGroupItem item={item} key={item.title} pathname={pathname} />
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}

function NavGroupItem({
	item,
	pathname,
}: {
	item: SidebarNavItem;
	pathname: string;
}) {
	const isActive = isNavItemActive(item, pathname);
	const hasSubItems = !!item.subItems?.length;
	const [userOpen, setUserOpen] = useState(false);
	const open = isActive || userOpen;

	if (!hasSubItems) {
		return (
			<SidebarMenuItem>
				<SidebarMenuButton
					isActive={isActive}
					render={<Link href={item.path ?? "#"} />}
				>
					{item.icon}
					<span>{item.title}</span>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);
	}

	return (
		<Collapsible
			className="group/collapsible"
			onOpenChange={(nextOpen) => setUserOpen(nextOpen)}
			open={open}
			render={<SidebarMenuItem />}
		>
			<CollapsibleTrigger render={<SidebarMenuButton isActive={isActive} />}>
				{item.icon}
				<span>{item.title}</span>
				<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
			</CollapsibleTrigger>
			<CollapsibleContent>
				<SidebarMenuSub>
					{item.subItems?.map((subItem) => (
						<SidebarMenuSubItem key={subItem.title}>
							<SidebarMenuSubButton
								isActive={isNavItemActive(subItem, pathname)}
								render={<Link href={subItem.path ?? "#"} />}
							>
								{subItem.icon}
								<span>{subItem.title}</span>
							</SidebarMenuSubButton>
						</SidebarMenuSubItem>
					))}
				</SidebarMenuSub>
			</CollapsibleContent>
		</Collapsible>
	);
}
