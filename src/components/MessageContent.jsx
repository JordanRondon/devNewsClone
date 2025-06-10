import SearchResult from "./SearchResult";

export default function MessageContent({ message }) {
  return (
    <>
      <div>
        {message.parts.map((part, index) => {
          switch (part.type) {
            case "text": {
              return <p key={index}>{part.text}</p>;
            }
            case "tool-invocation": {
              return (
                <SearchResult
                  key={index}
                  toolInvocation={part.toolInvocation}
                />
              );
            }
            default:
              return null;
          }
        })}
      </div>
    </>
  );
}
