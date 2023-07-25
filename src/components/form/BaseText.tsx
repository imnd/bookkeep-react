import { IModel } from "../../types/types";
import BaseLabel from "./BaseLabel";

export default function BaseText(props: {
  name: string;
  model: IModel | null;
  value?: string | number;
  type?: string;
  multiple?: boolean;
  label?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  showLabel?: boolean;
}) {
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
      <input
        type={props.type ?? "text"}
        name={props.name + (props.multiple ? "[]" : "")}
        defaultValue={
          props.value ??
          (props.model ? props.model[props.name as keyof IModel] : "")
        }
        placeholder={props?.placeholder ?? props.label ?? props.name}
        id={props?.id ?? props.name}
        required={props?.required ?? false}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
      />
    </div>
  );
}
