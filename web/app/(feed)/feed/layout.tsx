import type { ComponentProps, ReactNode } from "react";
import { FeedAppShell } from "@/components/feed/sidebar/app-shell";
import { TooltipProvider } from "@/components/ui/tooltip";

const sidebarProps = {
  collapsible: "icon",
  variant: "sidebar",
} satisfies NonNullable<ComponentProps<typeof FeedAppShell>["sidebarProps"]>;

export default function FeedLayout({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <FeedAppShell sidebarProps={sidebarProps}>{children}</FeedAppShell>
    </TooltipProvider>
  );
}
