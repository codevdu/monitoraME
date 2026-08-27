import { notFound } from "next/navigation";
import { AdminAnalyticsSection } from "@/components/admin/sections/admin-analytics-section";
import { AdminSecurityLogsSection } from "@/components/admin/sections/admin-security-logs";
import {
	navLinks,
	type SidebarNavItem,
} from "@/components/admin/sidebar/app-shared";
import { AdminUsersSection } from "@/components/admin/sections/admin-users-section";
import { AdminSettingsSection } from "@/components/admin/sections/admin-settings-section";
import { AdminBillingSection } from "@/components/admin/sections/admin-billing-section";

const sectionItems = navLinks.filter(
	(item): item is SidebarNavItem & { path: string } =>
		typeof item.path === "string" && item.path.startsWith("/admin/"),
);

function getSectionItem(section: string) {
	return sectionItems.find((item) => item.path === `/admin/${section}`);
}

const sectionComponents = {
	analytics: AdminAnalyticsSection,
	users: AdminUsersSection,
	logs: AdminSecurityLogsSection,
	settings: AdminSettingsSection,
	billing: AdminBillingSection,
};

export function generateStaticParams() {
	return sectionItems.map((item) => ({
		section: item.path.replace("/admin/", ""),
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ section: string }>;
}) {
	const { section } = await params;
	const item = getSectionItem(section);

	return {
		title: item ? `${item.title} | MonitoraME` : "Admin | MonitoraME",
	};
}

export default async function AdminSectionPage({
	params,
}: {
	params: Promise<{ section: string }>;
}) {
	const { section } = await params;
	const item = getSectionItem(section);

	if (!item) {
		notFound();
	}

	const SectionComponent =
		sectionComponents[section as keyof typeof sectionComponents];

	if (SectionComponent) {
		return <SectionComponent />;
	}

	return null
}
