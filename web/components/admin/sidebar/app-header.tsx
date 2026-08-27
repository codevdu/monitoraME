"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { DecorIcon } from "@/components/admin/sidebar/decor-icon";
import { AppBreadcrumbs } from "@/components/admin/sidebar/app-breadcrumbs";
import { getNavItemByPath } from "@/components/admin/sidebar/app-shared";
import { CustomSidebarTrigger } from "@/components/admin/sidebar/custom-sidebar-trigger";
import { NavUser } from "@/components/admin/sidebar/nav-user";
import { ThemeToggle } from "@/components/theme-toggle";
import { BellIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function AppHeader() {
	const activeItem = getNavItemByPath(usePathname());

	return (
		<header
			className={cn(
				"sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 md:px-6",
				"bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50"
			)}
		>
			<DecorIcon className="hidden md:block" position="bottom-left" />
			<div className="flex items-center gap-3">
				<CustomSidebarTrigger />
				<Separator
					className="mr-2 h-4 data-[orientation=vertical]:self-center"
					orientation="vertical"
				/>
				<AppBreadcrumbs page={activeItem} />
			</div>
			<div className="flex items-center gap-3">
				<Tooltip>
					<TooltipTrigger delay={1000} render={<ThemeToggle />} />
					<TooltipContent className="px-2 py-1" side="bottom">
						<KbdGroup>
							<Kbd>Ctrl+</Kbd>
							<Kbd>Shift</Kbd>
							<Kbd>L</Kbd>
						</KbdGroup>
					</TooltipContent>
				</Tooltip>
				<Button aria-label="Notifications" size="icon-sm" variant="outline">
					<BellIcon
					/>
				</Button>
				<Separator
					className="h-4 data-[orientation=vertical]:self-center"
					orientation="vertical"
				/>
				<NavUser />
			</div>
		</header>
	);
}
