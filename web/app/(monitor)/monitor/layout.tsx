import type { ComponentProps, ReactNode } from "react";
import { MonitorAppShell } from "@/components/monitor/sidebar/app-shell";
import { TooltipProvider } from "@/components/ui/tooltip";

const sidebarProps = {
	collapsible: "icon",
	variant: "sidebar",
} satisfies NonNullable<ComponentProps<typeof MonitorAppShell>["sidebarProps"]>;

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<TooltipProvider>
			<MonitorAppShell sidebarProps={sidebarProps}>{children}</MonitorAppShell>
		</TooltipProvider>
	);
}
