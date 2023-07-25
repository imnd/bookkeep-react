import {IModel} from "../../types/types";

export default function BaseCheckbox(props: {
  name: string;
  model: IModel;
  default?: boolean;
  label?: string;
  id?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        defaultValue={props.model[props.name as keyof IModel] ?? props.default ?? false}
        name={props.name}
        id={props?.id ?? props.name}
        required={props?.required ?? false}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block p-2.5"
      />
      <label
        htmlFor={props?.id ?? props.name}
        className="block pt-1 ml-4 mb-2 text-sm font-medium text-gray-900"
      >
        {props?.label ?? props.name}
      </label>
    </div>
  );
}
