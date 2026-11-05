import { Button, Form, Modal } from "react-bootstrap";
import { FiCheck, FiCopy } from "react-icons/fi";
import useChatMessage from "./useChatMessage";

type TShareModalProps = {
  text: string;
  show: boolean;
  onHide: () => void;
};

export default function ShareModal({ text, show, onHide }: TShareModalProps) {
  const { handleShareCopyLink, linkCopied } = useChatMessage(text);
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}?chat=shared`
      : "";

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      aria-labelledby="share-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="share-modal-title" className="fs-6 fw-bold">
          Share Chat Link
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-3 p-sm-4">
        <p className="small text-secondary mb-3">
          Anyone with this link will be able to view this conversation snapshot.
        </p>
        <Form.Group className="d-flex flex-column flex-sm-row gap-2">
          <Form.Label htmlFor="share-link-input" className="visually-hidden">
            Shared chat URL
          </Form.Label>
          <Form.Control
            id="share-link-input"
            type="text"
            readOnly
            value={shareUrl}
            className="bg-body-tertiary text-body border"
          />
          <Button
            variant="primary"
            onClick={handleShareCopyLink}
            aria-label={linkCopied ? "Link copied" : "Copy share link"}
            aria-live="polite"
            className="d-flex align-items-center justify-content-center gap-1 min-w-sm-100"
          >
            {linkCopied ? (
              <FiCheck size={16} aria-hidden="true" />
            ) : (
              <FiCopy size={16} aria-hidden="true" />
            )}
            <span>{linkCopied ? "Copied" : "Copy"}</span>
          </Button>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
}
