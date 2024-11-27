import { Link } from "react-router";
import clsx from "clsx";

type ButtonProps = {
  invert?: boolean;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<"button"> & { to?: undefined })
);

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-ocean-base hover:bg-ocean-300 hover:ring-2 hover:text-white ring-white"
      : "bg-ocean-400 text-sun-base hover:bg-white hover:text-ocean-500 hover:ring-2 ring-ocean-500"
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (typeof props.to === "undefined") {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link
      className={className}
      {...(props as React.ComponentPropsWithoutRef<typeof Link>)}
    >
      {inner}
    </Link>
  );
}
