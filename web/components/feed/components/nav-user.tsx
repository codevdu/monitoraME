import { Filters } from "./DropdownMenu";
import { InputGroupDemo } from "./search";

export function NavUser() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center px-1 gap-3 md:px-2">
        <Filters />
        <InputGroupDemo />
      </div>
    </section>
  );
} 