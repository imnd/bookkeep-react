import { IModel } from "../../types/types";

export default function BaseRadio(props: {
  name: string;
  model: IModel;
  label?: string;
  id?: string;
  values: string[] | number[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {props?.label ?? props.name}
      </label>
      {props.values.map((value: string | number, index: number) => (
        <div key={index} className="flex flex-row">
          <input
            type="radio"
            defaultValue={value}
            id={value as string}
            name={props.name}
            required={props?.required ?? false}
            defaultChecked={value === props.model[props.name as keyof IModel]}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block mr-2"
          />
          <label
            htmlFor={value as string}
            className="block text-sm font-medium text-gray-900"
          >
            {value}
          </label>
        </div>
      ))}
    </div>
  );
}
