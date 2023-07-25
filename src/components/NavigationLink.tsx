import { INavItem } from "../types/types";
import { useState } from "react";

export default function NavigationLink(props: { item: INavItem }) {
  const [show, setShow] = useState(false);
  let buttonArrow = show ? "down" : "right";

  const toggleShow = () => {
    setShow(!show);
  };

  return props.item.link ? (
    <li>
      <a
        href={props.item.link}
        className="text-base text-gray-900 rounded-lg flex items-center p-2 pl-3 group hover:bg-gray-100 transition duration-75"
      >
        <img
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          src={`/assets/img/${props.item.thumb ?? props.item.link}.svg`}
        />
        <span className="ml-3">{props.item.title}</span>
      </a>
    </li>
  ) : (
    <li>
      <button
        type="button"
        onClick={toggleShow}
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        <img
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          src={`/assets/img/${props.item.thumb ?? props.item.link}.svg`}
        />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          {props.item.title}
        </span>
        <img
          className="w-6 h-6 cursor-pointer"
          src={`/assets/img/arrow-${buttonArrow}.svg`}
        />
      </button>
      {show && (
        <ul className="space-y-2 py-2 pl-4">
          {props.item?.children?.map((child) => (
            <NavigationLink key={child.title} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
