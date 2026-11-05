import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Assistant is typing response"
      className="d-flex align-items-center gap-2 px-4 py-2 text-muted"
    >
      <Spinner animation="border" size="sm" aria-hidden="true" />
      <span className="small">Typing response...</span>
    </div>
  );
}
