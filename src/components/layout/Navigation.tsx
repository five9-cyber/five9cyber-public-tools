import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export function UserMenu({
  userNavigation,
}: Readonly<{ userNavigation: UserNavigation }>) {
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton className="flex items-center gap-x-2 text-sm/6 text-gresini-base">
          <span className="truncate">Tom Cook</span>
          <ChevronDownIcon className="h-5 w-5" />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-ocean-base divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {userNavigation.map((item) => (
          <MenuItem key={item.name}>
            <a
              href={item.href}
              className="block px-4 py-3 text-sm/6 text-gresini-base hover:bg-ocean-200"
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export function NavigationBar({
  userNavigation,
}: Readonly<{
  userNavigation: UserNavigation;
}>) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gresini-base bg-ocean-base px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Separator */}
      <div aria-hidden="true" className="h-6 w-px bg-gresini-base lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form action="#" method="GET" className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gresini-base"
          />
          <input
            id="search-field"
            name="search"
            type="search"
            placeholder="Search..."
            className="block bg-ocean-base size-full border-0 py-0 pl-8 pr-0 text-gresini-base placeholder:text-gresini-base focus:ring-0 sm:text-sm"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gresini-base hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
          <UserMenu userNavigation={userNavigation} />
          {/* Separator */}
          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gresini-base"
          />
        </div>
      </div>
    </div>
  );
}
