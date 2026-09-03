"use client"

import {
  Building2,
  Check,
  ChevronDown,
} from "lucide-react"

interface CompanySizeFilterProps {
  porte: string | null
  aberto: boolean
  onToggle: () => void
  onSelect: (porte: string) => void
  onClear: () => void
}

export function CompanySizeFilter({
  porte,
  aberto,
  onToggle,
  onSelect,
  onClear,
}: CompanySizeFilterProps) {
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
        Empresa
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
        <Building2 className="size-4 shrink-0" />

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">
            Porte
          </p>

          <p className="truncate text-[11px] text-muted-foreground">
            {porte || "Filtrar por tamanho"}
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
          {["EPP", "MEI", "ME"].map((opcao) => (
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

              {porte === opcao && (
                <Check className="size-3.5" />
              )}
            </button>
          ))}

          <button
            type="button"
            onClick={onClear}
            className="
              mt-1
              flex
              w-full
              items-center
              rounded-md
              border-t
              border-border
              px-2
              pt-2
              pb-1.5
              text-left
              text-sm
              text-muted-foreground
              hover:bg-muted
            "
          >
            Todos os portes
          </button>
        </div>
      )}
    </div>
  )
}