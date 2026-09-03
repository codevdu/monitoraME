"use client";

import { useEffect } from "react";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        const input = document.getElementById(
          "search-input",
        ) as HTMLInputElement | null;

        if (!input) return;

        if (document.activeElement === input) {
          input.blur();
        } else {
          input.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <InputGroup className="max-w-xs rounded-md hover:bg-gray-50">
      <InputGroupInput id="search-input" placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end" className="pr-2">
        <span className="hidden lg:inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          Ctrl K
        </span>
      </InputGroupAddon>
    </InputGroup>
  );
}
