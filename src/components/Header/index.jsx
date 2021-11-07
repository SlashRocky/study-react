import Link from "next/link";

import classes from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Index"
  },
  {
    href: "/about",
    label: "About"
  }
]

export const Header = () => {
  return (
    <header className={classes.header}>
      {
        NAV_ITEMS.length > 0 ? (
          NAV_ITEMS.map((nav_item) => {
            return(
              <Link key={nav_item.href} href={nav_item.href}>
                <a className={classes.anchor}>{nav_item.label}</a>
              </Link>
            );
          })
        ) : null
      }
    </header>
  );
};
