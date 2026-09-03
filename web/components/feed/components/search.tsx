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
    <InputGroup className="max-w-xs rounded-md">
      <InputGroupInput id="search-input" placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon className="px-4 text-xs" align="inline-end">
        Ctrl + K
      </InputGroupAddon>
    </InputGroup>
  );
}
