import { Button } from "react-bootstrap";
import { FiMessageSquare } from "react-icons/fi";

type TSidebarQueryProps = {
  onSelectQuery: (query: string) => void;
  onCloseMobile: () => void;
};

const SAMPLE_QUERIES = ["What is programming?", "What is use an API?"];

export default function SidebarQuery({
  onSelectQuery,
  onCloseMobile,
}: TSidebarQueryProps) {
  return (
    <nav aria-label="Recent chats" className="d-flex flex-column gap-2">
      <h2 className="visually-hidden">Recent Conversations</h2>
      {SAMPLE_QUERIES.map((queryText, index) => (
        <Button
          key={index}
          variant="outline-secondary"
          aria-label={`Load topic: ${queryText}`}
          className="text-start text-body border-body-secondary d-flex align-items-center gap-2 px-3 py-2 text-truncate"
          onClick={() => {
            onSelectQuery(queryText);
            onCloseMobile();
          }}
        >
          <FiMessageSquare
            size={16}
            className="flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-truncate">{queryText}</span>
        </Button>
      ))}
    </nav>
  );
}
