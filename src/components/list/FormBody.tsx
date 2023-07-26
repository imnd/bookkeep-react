import React from "react";
import { IModel } from "../../types/types";

export default function FormBody(props: {
  saveModel: (e: React.ChangeEvent<HTMLFormElement>) => void;
  hideItemForm: () => void;
  showDeleteForm: (item: IModel | null) => void;
  renderForm: (model: IModel | null) => React.ReactNode;
  action: string;
  model: IModel | null;
}) {
  return (
    <form className="space-y-4" action="#" onSubmit={props.saveModel}>
      {props.renderForm(props.model)}
      <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
        <button
          type="submit"
          className="w-full justify-center text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {props.action}
        </button>
        {props.action === "Update" && (
          <button
            onClick={() => {
              props.hideItemForm();
              props.showDeleteForm(props.model);
            }}
            type="button"
            className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-1 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
            </svg>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
