import { NavUser } from "../components/nav-user";
import { LicitacoesTable } from "@/components/feed/components/table/table-block";

export function FeedLicitacoesSection() {
  return (
    <section className="space-y-6">
      <NavUser />
      <LicitacoesTable />
    </section>
  );
} 