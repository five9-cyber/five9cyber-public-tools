/// <reference types="vite/client" />
type UserNavigation = { name: string; href: string }[];

type SidebarNavigation = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}[];

type HeaderNavigation = {
  name: string;
  href: string;
}[];

type FooterNavigation = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}[];

type TeamList = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}[];
