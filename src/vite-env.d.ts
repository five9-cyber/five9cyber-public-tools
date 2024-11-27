/// <reference types="vite/client" />

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

type CIDRCalcResults = {
  cidrRange: string | null;
  netmask: string | null;
  wildcardBits: string | null;
  network: string | null;
  broadcast: string | null;
  usableStart: string | null;
  usableEnd: string | null;
  usableStartDecimal: number | null;
  usableEndDecimal: number | null;
  firstIPDecimal: number | null;
  lastIPDecimal: number | null;
  totalHosts: number | null;
};
