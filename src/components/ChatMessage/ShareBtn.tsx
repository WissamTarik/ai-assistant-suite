import { Button } from "react-bootstrap";
import { FiShare2 } from "react-icons/fi";

type TShareBtnProps = {
  onOpenModal: () => void;
};

export default function ShareBtn({ onOpenModal }: TShareBtnProps) {
  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={onOpenModal}
      aria-label="Share message link"
      className="d-flex align-items-center gap-1 py-1 px-2 border-0 bg-transparent text-secondary"
    >
      <FiShare2 size={16} aria-hidden="true" />
      <span className="small d-none d-sm-inline">Share</span>
    </Button>
  );
}
