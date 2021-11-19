import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Index"
  },
  {
    href: "/posts",
    label: "Posts"
  },
  {
    href: "/users",
    label: "Users"
  },
  {
    href: "/comments",
    label: "Comments"
  }
]

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4">
      {
        NAV_ITEMS.length > 0 ? (
          NAV_ITEMS.map((nav_item) => {
            return(
              <Link key={nav_item.href} href={nav_item.href}>
                <a className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500">{nav_item.label}</a>
              </Link>
            );
          })
        ) : null
      }
    </header>
  );
};
