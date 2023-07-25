import React from "react";
import Navigation from "./Navigation";
import { INavItem } from "../types/types";

interface LayoutProps {
  navItems: INavItem[];
  contents: () => React.ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">{props.pageTitle}</h1>
          </div>
        </div>
      </nav>
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Navigation items={props.navItems} />

        <main className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          {props.contents()}
        </main>
      </div>

      <footer className="py-12 bg-white xl:py-24 dark:bg-gray-800">
        <hr className="my-8 border-gray-200 lg:my-12 dark:border-gray-700" />
        <span className="block text-center text-gray-600 dark:text-gray-400">
          © 2023 IMND. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
