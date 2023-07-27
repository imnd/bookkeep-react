import { IModel } from "../../types/types";
import { FormHelpers } from "./helpers";

export default function FormRowButtons(props: { model: IModel | undefined }) {
  const formRowHelpers = new FormHelpers(props.model);

  return (
    <td>
      {props.model ? (
        <span
          onClick={formRowHelpers.deleteRow}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-black rounded text-sm text-center cursor-pointer px-2 pb-0.5 pt-0 ml-2"
        >
          -
        </span>
      ) : (
        <span
          onClick={formRowHelpers.cloneRow}
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-black rounded text-sm text-center cursor-pointer px-1.5 pb-0.5 pt-0 ml-2"
        >
          +
        </span>
      )}
    </td>
  );
}
