import React from "react";

export default function FormModal(props: {
  entityName: string;
  action: string;
  onClick: () => void;
  contents: React.ReactNode;
}) {
  return (
    <div className="fixed left-0 right-0 top-4 z-50 flex justify-center md:inset-0 sm:h-full overflow-x-hidden overflow-y-auto">
      <div className="relative w-full h-full mx-auto max-w-2xl px-4 md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
              {props.action + " " + props.entityName}
            </h3>
            <button
              type="button"
              onClick={props.onClick}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            {props.contents}

            <div className="items-center p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                {`${props.action} ${props.entityName}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
