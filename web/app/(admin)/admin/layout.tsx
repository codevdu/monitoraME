import type { ComponentProps, ReactNode } from "react";
import { AppShell } from "@/components/admin/sidebar/app-shell";
import { TooltipProvider } from "@/components/ui/tooltip";

const sidebarProps = {
	collapsible: "icon",
	variant: "sidebar",
} satisfies NonNullable<ComponentProps<typeof AppShell>["sidebarProps"]>;

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<TooltipProvider>
			<AppShell sidebarProps={sidebarProps}>{children}</AppShell>
		</TooltipProvider>
	);
}
