import React from "react";

export default function DeleteForm(props: {
  onClose: () => void;
  onDelete: (e: any) => Promise<void>;
}) {
  return (
    <div
      id="drawer-delete-item-default"
      className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"
      tabIndex={-1}
      aria-labelledby="drawer-label"
      aria-modal="true"
      role="dialog"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Delete item
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-delete-item-default"
        aria-controls="drawer-delete-item-default"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          onClick={() => props.onClose()}
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <svg
        className="w-10 h-10 mt-8 mb-4 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="mb-6 text-lg text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this item?
      </h3>
      <a
        href="#"
        onClick={props.onDelete}
        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900"
      >
        Yes, I'm sure
      </a>
      <a
        onClick={() => props.onClose()}
        href="#"
        className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        data-modal-toggle="delete-item-modal"
      >
        No, cancel
      </a>
    </div>
  );
}
