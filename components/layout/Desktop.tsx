import clsx from "clsx";
import { sidebar_navigation } from "@/constants/data";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export function DesktopSidebar({ teamList }: Readonly<{ teamList: TeamList }>) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="pt-6 flex grow flex-col gap-y-5 overflow-y-auto border-r border-gresini-base bg-ocean-base px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <a
            href="https://five9cyber.com"
            className="flex flex-row-reverse gap-x-4 items-center -m-1.5 p-1.5"
          >
            <span className="text-gresini-900">Five9 Cyber</span>
            <img
              alt="Five9 Cyber Logo"
              src="/five9cyber_logo_circle_gresini.png"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {sidebar_navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={clsx(
                        item.current
                          ? "bg-ocean-base text-gresini-900"
                          : "text-gresini-base hover:bg-ocean-200 hover:text-gresini-900",
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={clsx(
                          item.current
                            ? "text-gresini-900"
                            : "text-gresini-base group-hover:text-gresini-900",
                          "size-6 shrink-0"
                        )}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs/6 font-semibold text-gray-400">
                Your teams
              </div>
              <ul className="-mx-2 mt-2 space-y-1">
                {teamList.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={clsx(
                        team.current
                          ? "bg-ocean-base text-gresini-900"
                          : "text-gresini-base hover:bg-ocean-200 hover:text-gresini-900",
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                      )}
                    >
                      <span
                        className={clsx(
                          team.current
                            ? "border-gresini-900 text-gresini-900"
                            : "border-gresini-base text-gresini-base group-hover:border-gresini-900 group-hover:text-gresini-900",
                          "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-ocean-base text-[0.625rem] font-medium"
                        )}
                      >
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto mb-1">
              <a
                href="/setttings"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gresini-base hover:bg-ocean-200 hover:text-gresini-900"
              >
                <Cog6ToothIcon
                  aria-hidden="true"
                  className="size-6 shrink-0 text-gresini-base group-hover:text-gresini-900"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
