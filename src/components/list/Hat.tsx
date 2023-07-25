export default function Hat(props: {items: string[]}) {
  return (
    <>
      {props.items.map((item, index) => (
          <th key={index} scope="col" className="p-4">
            {item}
          </th>
      ))}
    </>
  );
};
