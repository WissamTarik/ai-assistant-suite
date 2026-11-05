import { Button } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

type TTopHeaderProps = {
  setShowMobileSidebar: (value: boolean) => void;
};

export default function TopHeader({ setShowMobileSidebar }: TTopHeaderProps) {
  return (
    <header className="d-lg-none d-flex align-items-center justify-content-between p-3 border-bottom border-body-secondary bg-body-tertiary text-body">
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setShowMobileSidebar(true)}
        aria-label="Open sidebar menu"
        aria-controls="mobile-sidebar"
        className="d-flex align-items-center gap-2 text-body border-body-secondary"
      >
        <FiMenu size={20} aria-hidden="true" />
      </Button>

      <h1 className="fw-bold fs-5 text-body mb-0">ChatGPT</h1>

      <div className="d-lg-none" aria-label="Theme switcher container">
        <ThemeToggle />
      </div>
    </header>
  );
}
