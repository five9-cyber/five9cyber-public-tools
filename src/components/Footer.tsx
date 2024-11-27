import { footer_navigation } from "@/constants/data";
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-ocean-base/65">
      <div className="flex flex-col items-center gap-y-2 mx-auto max-w-7xl py-6 md:flex md:items-end">
        <div className="flex justify-center gap-x-6">
          {footer_navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gresini-900/85 hover:text-gresini-900"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="text-sm/6 text-gresini-900">
          &copy; {currentYear} Five9 Cyber. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
