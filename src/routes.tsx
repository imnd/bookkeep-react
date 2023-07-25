import { INavItem } from "./types/types";

export default [
  { title: "Invoices", link: "invoices" } as INavItem,
  {
    title: "Contracts",
    link: "contracts",
  } as INavItem,
  {
    title: "Purchases",
    link: "purchases",
  } as INavItem,
  { title: "Bills", link: "bills" } as INavItem,
  {
    title: "Settings",
    thumb: "gear",
    children: [
      {
        title: "Articles",
        thumb: "articles",
        children: [
          {
            title: "Articles",
            link: "articles",
          } as INavItem,
          {
            title: "Article categories",
            link: "article-categories",
          } as INavItem,
          {
            title: "Article subcategories",
            link: "article-subcategories",
          } as INavItem,
        ],
      } as INavItem,
      { title: "Banks", link: "banks" } as INavItem,
      {
        title: "Clients",
        link: "clients",
      } as INavItem,
      {
        title: "Regions",
        link: "regions",
      } as INavItem,
      {
        title: "Settings",
        link: "settings",
      } as INavItem,
    ],
  } as INavItem,
];
