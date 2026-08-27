import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/monitor/sidebar/app-header";
import { AppSidebar } from "@/components/monitor/sidebar/app-sidebar";

type AppShellProps = {
	children: ReactNode;
	sidebarProps?: ComponentProps<typeof AppSidebar>;
};

export function MonitorAppShell({ children, sidebarProps }: AppShellProps) {
	return (
		<SidebarProvider className={cn("[--app-wrapper-max-width:80rem]")}>
			<AppSidebar {...sidebarProps} />
			<SidebarInset>
				<AppHeader />
				<div
					className={cn(
						"flex flex-1 flex-col p-4 md:p-6",
						"mx-auto w-full max-w-(--app-wrapper-max-width)"
					)}
				>
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
