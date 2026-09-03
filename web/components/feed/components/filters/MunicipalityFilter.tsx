"use client"

import { useMemo, useState } from "react"
import {
  ArrowLeft,
  Check,
  Search,
  X,
} from "lucide-react"

import { municipalities } from "./municipalities"

interface MunicipalityFilterProps {
  municipio: string | null
  onSelect: (municipio: string) => void
  onBack: () => void
}

export function MunicipalityFilter({
  municipio,
  onSelect,
  onBack,
}: MunicipalityFilterProps) {
  const [buscaMunicipio, setBuscaMunicipio] =
    useState("")

  const municipiosFiltrados = useMemo(() => {
    const busca = buscaMunicipio
      .toLowerCase()
      .trim()

    if (!busca) {
      return municipalities
    }

    return municipalities.filter((nome) =>
      nome.toLowerCase().includes(busca)
    )
  }, [buscaMunicipio])

  return (
    <>
      <div className="flex items-center gap-2 px-2 py-1.5">
        <button
          type="button"
          onClick={onBack}
          className="
            flex
            size-7
            items-center
            justify-center
            rounded-md
            hover:bg-muted
          "
        >
          <ArrowLeft className="size-4" />
        </button>

        <div className="flex flex-col">
          <span className="text-sm font-semibold">
            Escolher município
          </span>

          <span className="text-[11px] text-muted-foreground">
            Pesquise um município
          </span>
        </div>
      </div>

      <div className="my-1 h-px bg-border" />

      <div className="px-1 pb-1">
        <div
          className="
            flex
            h-8
            items-center
            gap-2
            rounded-md
            border
            border-border/60
            px-2
            focus-within:border-border
          "
        >
          <Search
            className="
              size-3.5
              shrink-0
              text-muted-foreground
            "
          />

          <input
            autoFocus
            type="text"
            value={buscaMunicipio}
            onChange={(event) =>
              setBuscaMunicipio(event.target.value)
            }
            placeholder="Pesquisar município..."
            className="
              h-full
              w-full
              bg-transparent
              text-xs
              outline-none
              placeholder:text-muted-foreground
            "
          />

          {buscaMunicipio && (
            <button
              type="button"
              onClick={() => setBuscaMunicipio("")}
              className="
                text-muted-foreground
                hover:text-foreground
              "
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="max-h-52 overflow-y-auto">
        {municipiosFiltrados.length > 0 ? (
          municipiosFiltrados.map((nome) => (
            <button
              key={nome}
              type="button"
              onClick={() => onSelect(nome)}
              className="
                flex
                w-full
                items-center
                rounded-md
                px-2
                py-1.5
                text-left
                text-sm
                outline-none
                hover:bg-muted
              "
            >
              <span className="flex-1">
                {nome}
              </span>

              {municipio === nome && (
                <Check className="size-3.5" />
              )}
            </button>
          ))
        ) : (
          <div
            className="
              px-2
              py-4
              text-center
              text-xs
              text-muted-foreground
            "
          >
            Nenhum município encontrado.
          </div>
        )}
      </div>
    </>
  )
}