"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LicitacoesTablePaginationProps {
  pagina: number;
  totalPaginas: number;
  onPaginaChange: (pagina: number) => void;
}

export const LicitacoesTablePagination = ({ pagina, totalPaginas, onPaginaChange }: LicitacoesTablePaginationProps) => {
  return (
    <div className="flex items-center justify-center border-t border-border bg-muted/20 px-4 py-3">
      <div className="flex items-center gap-1">
        <button aria-label="Ir para a página anterior" type="button" disabled={pagina === 1} onClick={() => onPaginaChange(pagina - 1)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPaginas }, (_, index) => {
            const numeroPagina = index + 1;
            const ativa = numeroPagina === pagina;

            return (
              <button aria-current={ativa ? "page" : undefined} key={numeroPagina} type="button" onClick={() => onPaginaChange(numeroPagina)} className="relative flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-xs font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
                {ativa && (
                  <motion.span layoutId="pagina-ativa" className="absolute inset-0 rounded-md bg-primary shadow-sm" transition={{ type: "spring", stiffness: 500, damping: 35 }} />
                )}

                <span className={`relative z-10 ${ativa ? "text-primary-foreground" : ""}`}>
                  {numeroPagina}
                </span>
              </button>
            );
          })}
        </div>

        <button aria-label="Ir para a próxima página" type="button" disabled={pagina === totalPaginas} onClick={() => onPaginaChange(pagina + 1)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
