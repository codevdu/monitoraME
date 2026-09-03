"use client"

import {
  Check,
  ChevronDown,
  Search,
} from "lucide-react"

interface SortFilterProps {
  ordenacao: string | null
  aberto: boolean
  onToggle: () => void
  onSelect: (ordenacao: string) => void
}

export function SortFilter({
  ordenacao,
  aberto,
  onToggle,
  onSelect,
}: SortFilterProps) {
  return (
    <div className="px-1">
      <p
        className="
          px-1
          py-1
          text-[10px]
          font-medium
          uppercase
          tracking-wider
          text-muted-foreground
        "
      >
        Valores
      </p>

      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          gap-2
          rounded-md
          px-2
          py-1.5
          text-left
          outline-none
          hover:bg-muted
        "
      >
        <Search className="size-4 shrink-0" />

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">
            Valores
          </p>

          <p className="truncate text-[11px] text-muted-foreground">
            {ordenacao || "Ordenar despesas"}
          </p>
        </div>

        <ChevronDown
          className={`
            size-3.5
            transition-transform
            ${aberto ? "rotate-180" : ""}
          `}
        />
      </button>

      {aberto && (
        <div
          className="
            ml-6
            mt-0.5
            border-l
            border-border
            pl-1
          "
        >
          {["Crescente", "Decrescente"].map(
            (opcao) => (
              <button
                key={opcao}
                type="button"
                onClick={() => onSelect(opcao)}
                className="
                  flex
                  w-full
                  items-center
                  rounded-md
                  px-2
                  py-1.5
                  text-left
                  text-sm
                  hover:bg-muted
                "
              >
                <span className="flex-1">
                  {opcao}
                </span>
                {ordenacao === opcao && (
                  <Check className="size-3.5" />
                )}
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}