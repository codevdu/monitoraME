import { notFound } from "next/navigation";
import { FeedLicitacoesSection } from "@/components/feed/sections/feed-licitacoes-section";
import {
  navLinks,
  type SidebarNavItem,
} from "@/components/feed/sidebar/app-shared";

const sectionItems = navLinks.filter(
  (item): item is SidebarNavItem & { path: string } =>
    typeof item.path === "string" && item.path.startsWith("/feed/"),
);

function getSectionItem(section: string) {
  return sectionItems.find((item) => item.path === `/feed/${section}`);
}

const sectionComponents = {
  licitacoes: FeedLicitacoesSection,
};

export function generateStaticParams() {
  return sectionItems.map((item) => ({
    section: item.path.replace("/feed/", ""),
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
    title: item ? `${item.title} | MonitoraME` : "Feed | MonitoraME",
  };
}

export default async function FeedSectionPage({
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
