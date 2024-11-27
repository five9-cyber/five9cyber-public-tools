import { Dispatch, SetStateAction } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export function Header({
  setSidebarOpen,
}: Readonly<{ setSidebarOpen: Dispatch<SetStateAction<boolean>> }>) {
  return (
    <header className="block sm:hidden bg-ocean-base/65 sticky top-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="https://five9cyber.com" className="-m-1.5 p-1.5">
            <span className="sr-only">Five9 Cyber</span>
            <img
              alt=""
              src="/five9cyber_logo_circle_gresini.png"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"></div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gresini-900 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </nav>
    </header>
  );
}
