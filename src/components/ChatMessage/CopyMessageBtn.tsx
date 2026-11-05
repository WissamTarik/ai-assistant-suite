import { Button } from "react-bootstrap";
import { FiCheck, FiCopy } from "react-icons/fi";
import useChatMessage from "./useChatMessage";

type TCopyMessageBtnProps = {
  text: string;
};

export default function CopyMessageBtn({ text }: TCopyMessageBtnProps) {
  const { handleCopyText, copied } = useChatMessage(text);

  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={handleCopyText}
      aria-label={
        copied ? "Text copied to clipboard" : "Copy text to clipboard"
      }
      aria-live="polite"
      className="d-flex align-items-center gap-1 py-1 px-2 border-0 bg-transparent text-secondary text-hover-body"
    >
      {copied ? (
        <FiCheck size={16} className="text-success" aria-hidden="true" />
      ) : (
        <FiCopy size={16} aria-hidden="true" />
      )}
      <span className="small d-none d-sm-inline">
        {copied ? "Copied" : "Copy"}
      </span>
    </Button>
  );
}
