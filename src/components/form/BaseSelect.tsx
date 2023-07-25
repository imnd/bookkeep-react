import { IKeyVal, IModel } from "../../types/types";
import BaseLabel from "./BaseLabel";

export default function BaseSelect(props: {
  name: string;
  options: IKeyVal<string>;
  model: IModel | null;
  multiple?: boolean;
  value?: string | number;
  type?: string;
  label?: string;
  voidText?: string;
  id?: string;
  required?: boolean;
  showLabel?: boolean;
}) {
  const getCaption = (value: string) => props.options[value];

  return (
    <div>
      {(props.showLabel ?? true) && (
        <BaseLabel
          name={props.name}
          label={props?.label}
          id={props.id}
          required={props.required}
        />
      )}
      <select
        name={props.name + (props.multiple ? "[]" : "")}
        id={props?.id ?? props.name}
        required={props?.required ?? false}
        defaultValue={
          props.value ??
          (props.model ? props.model[props.name as keyof IModel] : "")
        }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
      >
        <option value="">{props?.voidText ?? "..."}</option>
        {Object.keys(props.options).map((value: string, index: number) => (
          <option key={value} value={value}>
            {getCaption(value)}
          </option>
        ))}
      </select>
    </div>
  );
}
