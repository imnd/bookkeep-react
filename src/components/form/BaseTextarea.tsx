import React from "react";
import { IModel } from "../../types/types";
import BaseLabel from "./BaseLabel";

export default function BaseTextarea(props: {
  name: string;
  model: IModel | null;
  value?: string | number;
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
      <textarea
        name={props.name + (props.multiple ? "[]" : "")}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
        defaultValue={
          props.value ??
          (props.model ? props.model[props.name as keyof IModel] : "")
        }
        placeholder={props?.placeholder ?? props.name}
      />
    </div>
  );
}
