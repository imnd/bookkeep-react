import React from "react";

export default function CreateButton(props: {
  handler: () => void;
  entityName: string;
}) {
  return (
    <button
      type="button"
      className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.handler()}
    >
      Add new {props.entityName}
    </button>
  );
}
