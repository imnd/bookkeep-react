import React from "react";

export default function FormDocker(props: {
  entityName: string;
  action: string;
  onClick: () => void;
  contents: React.ReactNode;
}) {
  return (
    <div
      className={
        "fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white transform-none"
      }
      aria-labelledby="drawer-label"
      aria-modal="true"
      role="dialog"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase"
      >
        {props.action + " " + props.entityName}
      </h5>
      <button
        type="button"
        onClick={props.onClick}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      {props.contents}
    </div>
  );
}
