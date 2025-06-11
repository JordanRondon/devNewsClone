export default function SearchResult({ toolInvocation }) {
  if (!Array.isArray(toolInvocation.result)) return null;
  return (
    <ul>
      {toolInvocation.result.map((resultItem, index) => {
        return (
          <li key={index}>
            <a href={resultItem.url}>{resultItem.title}</a>
            <span>{resultItem.description}</span>
          </li>
        );
      })}
    </ul>
  );
}
