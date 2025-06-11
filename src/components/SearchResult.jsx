export default function SearchResult({ toolInvocation }) {
  if (!Array.isArray(toolInvocation.result)) return null;
  return (
    <ul className="space-y-4 mt-6">
      {toolInvocation.result.map((resultItem, index) => {
        return (
          <li
            key={index}
            className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={resultItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg hover:text-blue-600"
            >
              {resultItem.title}
            </a>
            <p className="text-sm text-gray-600 mt-1">
              {resultItem.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
