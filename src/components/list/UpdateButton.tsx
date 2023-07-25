export default function UpdateButton<T>(props: {
  handler: (item: T) => void;
  item: any;
}) {
  return (
    <button
      type="button"
      onClick={(e) => props.handler(props.item)}
      id="updateButton"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
      Update
    </button>
  );
}
