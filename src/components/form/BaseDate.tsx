import { IModel } from "../../types/types";

export default function BaseDate(props: {
  name: string;
  model: IModel;
  label?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  showLabel?: boolean;
}) {
  const dateTime: string = (props.model &&
    props.model[props.name as keyof IModel]) as unknown as string;

  let date;
  if (dateTime) {
    [date] = dateTime.split("T");
  } else {
    date = "";
  }

  return (
    <div>
      {(props.showLabel ?? true) && (
        <label
          htmlFor={props?.id ?? props.name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {props?.label ?? props.name}
        </label>
      )}
      <input
        type="date"
        name={props.name}
        defaultValue={date}
        placeholder={props?.placeholder ?? props.label ?? props.name}
        id={props?.id ?? props.name}
        required={props?.required ?? false}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
      />
    </div>
  );
}
