"use client"

import { useEffect, useRef, useState } from "react"
import {
  ChevronDown,
  Filter,
  Search,
  Check,
} from "lucide-react"
import { MunicipalityFilter } from "@/components/feed/components/filters/MunicipalityFilter"
import { CompanySizeFilter } from "@/components/feed/components/filters/CompanySizeFilter"
import { SortFilter } from "@/components/feed/components/filters/SortFilter"

export function Filters() {
  const [open, setOpen] = useState(false)
  const [municipio, setMunicipio] = useState<string | null>(null)
  const [porte, setPorte] = useState<string | null>(null)
  const [ordenacao, setOrdenacao] = useState<string | null>(null)
  const [selecionandoMunicipio, setSelecionandoMunicipio] = useState(false)
  const [porteAberto, setPorteAberto] = useState(false)
  const [ordenacaoAberta, setOrdenacaoAberta] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  const fecharMenu = () => {
    setOpen(false)
    setSelecionandoMunicipio(false)
    setPorteAberto(false)
    setOrdenacaoAberta(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "m"
      ) {
        event.preventDefault()

        setOpen((prev) => !prev)
      }

      if (event.key === "Escape") {
        fecharMenu()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        fecharMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
    }
  }, [])

  const selecionarMunicipio = (nome: string) => {
    setMunicipio(nome)
    setSelecionandoMunicipio(false)
    setOpen(true)
  }

  const selecionarPorte = (novoPorte: string) => {
    setPorte((atual) =>
      atual === novoPorte ? null : novoPorte
    )

    setOpen(true)
  }

  const selecionarOrdenacao = (novaOrdenacao: string) => {
    setOrdenacao((atual) =>
      atual === novaOrdenacao ? null : novaOrdenacao
    )

    setOpen(true)
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-overlay/40 backdrop-blur-[1px]"
          onClick={fecharMenu}
        />
      )}

      <div
        ref={menuRef}
        className="relative z-50 inline-block"
      >
        <button
          type="button"
          onClick={() => {
            if (open) {
              fecharMenu()
            } else {
              setOpen(true)
            }
          }}
          className="flex h-9 items-center gap-2 rounded-lg border border-border/60 bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Filter className="size-4" />
          <span className="hidden sm:inline">
            Filtros
          </span>

          <span className="hidden items-center rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground lg:inline-flex">
            Ctrl M
          </span>

          <ChevronDown
            className={`
              size-3.5
              transition-transform
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>

        {open && (
          <div className="absolute left-0 top-full z-50 mt-1.5 w-64 overflow-visible rounded-xl border border-border/60 bg-background p-1 shadow-lg">
            {selecionandoMunicipio ? (
              <MunicipalityFilter
                municipio={municipio}
                onSelect={selecionarMunicipio}
                onBack={() =>
                  setSelecionandoMunicipio(false)
                }
              />
            ) : (
              <>
                <div className="px-2 py-1.5">
                  <p className="text-sm font-semibold">
                    Filtros
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {municipio
                      ? `Filtros para ${municipio}`
                      : "Refine sua pesquisa"}
                  </p>
                </div>

                <div className="my-1 h-px bg-border" />

                <div className="px-1">
                  <p className="px-1 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Localização
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSelecionandoMunicipio(true)
                      setPorteAberto(false)
                      setOrdenacaoAberta(false)
                    }}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left outline-none hover:bg-muted"
                  >
                    <Search className="size-4 shrink-0" />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {municipio || "Municípios"}
                      </p>

                      <p className="truncate text-[11px] text-muted-foreground">
                        {municipio
                          ? "Município selecionado"
                          : "Escolher município"}
                      </p>
                    </div>

                    {municipio && (
                      <Check className="size-3.5" />
                    )}
                  </button>
                </div>

                <div className="my-1 h-px bg-border" />

                <SortFilter
                  ordenacao={ordenacao}
                  aberto={ordenacaoAberta}
                  onToggle={() => {
                    setOrdenacaoAberta((prev) => !prev)
                    setPorteAberto(false)
                  }}
                  onSelect={selecionarOrdenacao}
                />

                <div className="my-1 h-px bg-border" />

                <CompanySizeFilter
                  porte={porte}
                  aberto={porteAberto}
                  onToggle={() => {
                    setPorteAberto((prev) => !prev)
                    setOrdenacaoAberta(false)
                  }}
                  onSelect={selecionarPorte}
                  onClear={() => {
                    setPorte(null)
                    setOpen(true)
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
