import { Modal, Button, Badge } from "react-bootstrap";
import { FiCpu, FiHeart, FiMail, FiShield, FiUser } from "react-icons/fi";
import chatGPTLogo from "../../assets/chatgptLogo.svg";
import { useTheme } from "../../contexts/ThemeContext";

type TAboutModalProps = {
  show: boolean;
  onHide: () => void;
};

export default function AboutModal({ show, onHide }: TAboutModalProps) {
  const { theme } = useTheme();

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      data-bs-theme={theme}
      aria-labelledby="about-modal-title"
      contentClassName="bg-body text-body border-body-secondary shadow"
    >
      <Modal.Header
        closeButton
        className="border-bottom border-body-secondary py-2 py-sm-3"
      >
        <Modal.Title
          id="about-modal-title"
          className="d-flex align-items-center gap-2 fs-6 fs-sm-5 fw-semibold"
        >
          <img
            src={chatGPTLogo}
            alt=""
            width={20}
            height={20}
            className="flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-truncate">About ChatGPT Clone</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-3 p-sm-4 text-body">
        <div className="text-center mb-3 mb-sm-4">
          <h2 className="fs-5 fs-sm-4 fw-bold mb-1">ChatGPT AI Assistant</h2>
          <p className="text-secondary small mb-2">Version 1.0.0</p>
          <Badge
            bg="primary-subtle"
            className="text-primary border border-primary-subtle px-2 py-1 px-sm-3 py-sm-2 rounded-pill small"
          >
            React + TypeScript + Bootstrap
          </Badge>
        </div>

        <p className="text-secondary leading-relaxed mb-3 mb-sm-4 small fs-sm-6">
          A full-featured responsive AI Chat Interface built with React,
          TypeScript, and React Bootstrap. Features multi-modal image support,
          theme customization, exportable messages, and accessible UI controls.
        </p>

        {/* Developer Credit & Contact Info Card (Mobile Stack & Dark-Mode Link Fix) */}
        <div className="p-3 rounded bg-body-tertiary border border-body-secondary mb-3 mb-sm-4">
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2">
            <div className="d-flex align-items-center gap-2">
              <FiUser
                className="text-primary flex-shrink-0"
                size={18}
                aria-hidden="true"
              />
              <span className="small fw-semibold">
                Developed by{" "}
                <span className="text-body fw-bold">Wissam Tarik</span>
              </span>
            </div>

            <a
              href="mailto:www.wissamtarik2021@gmail.com"
              className="d-inline-flex align-items-center gap-1.5 small link-primary text-break mw-100"
            >
              <FiMail size={14} className="flex-shrink-0" aria-hidden="true" />
              <span className="text-break">wissamtarik2021@gmail.com</span>
            </a>
          </div>
        </div>

        <hr className="my-3 my-sm-4 border-body-secondary" />

        <div className="row g-2 g-sm-3 text-start">
          <div className="col-12 col-sm-6">
            <div className="d-flex align-items-start gap-2 gap-sm-3 p-2 p-sm-3 rounded bg-body-tertiary border border-body-secondary h-100">
              <FiCpu
                size={20}
                className="text-primary flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <h3 className="fs-6 fw-semibold mb-1">Smart AI Interaction</h3>
                <small className="text-secondary d-block">
                  Supports markdown rendering, live code formatting, and
                  attachment previews.
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="d-flex align-items-start gap-2 gap-sm-3 p-2 p-sm-3 rounded bg-body-tertiary border border-body-secondary h-100">
              <FiShield
                size={20}
                className="text-success flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <h3 className="fs-6 fw-semibold mb-1">Accessibility First</h3>
                <small className="text-secondary d-block">
                  Built to WCAG guidelines with keyboard navigation and screen
                  reader support.
                </small>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-top border-body-secondary d-flex justify-content-between align-items-center py-2 px-3">
        <small className="text-secondary d-flex align-items-center gap-1 fs-7">
          Made with{" "}
          <FiHeart className="text-danger" size={12} aria-hidden="true" /> by
          Wissam Tarik
        </small>
        <Button variant="secondary" size="sm" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
