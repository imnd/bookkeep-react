export default function BaseLabel(props: {
  name: string;
  label?: string | undefined;
  id?: string | undefined;
  required?: boolean | undefined;
}) {
  return (
    <label
      htmlFor={props?.id ?? props.name}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {props?.label ?? props.name}
    </label>
  );
}
