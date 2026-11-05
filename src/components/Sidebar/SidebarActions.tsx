// src/components/Sidebar/SidebarActions.tsx
import { Nav } from "react-bootstrap";
import { FiBookmark, FiHome, FiInfo, FiZap } from "react-icons/fi";

type TSidebarActionsProps = {
  onOpenAbout?: () => void;
};

export default function SidebarActions({ onOpenAbout }: TSidebarActionsProps) {
  return (
    <nav
      aria-label="Account utilities"
      className="mt-auto pt-3 border-top border-body-secondary"
    >
      <Nav className="flex-column gap-1 mb-3">
        <Nav.Link
          href="#home"
          aria-label="Navigate to Home"
          className="text-body d-flex align-items-center gap-3 py-2 px-2 rounded"
        >
          <FiHome size={18} aria-hidden="true" />
          <span>Home</span>
        </Nav.Link>

        {/* About Page Trigger */}
        <Nav.Link
          as="button"
          onClick={onOpenAbout}
          aria-label="Open About Information"
          className="text-body d-flex align-items-center gap-3 py-2 px-2 rounded bg-transparent border-0 w-100 text-start"
        >
          <FiInfo size={18} aria-hidden="true" />
          <span>About</span>
        </Nav.Link>

        <Nav.Link
          href="#saved"
          aria-label="View Saved Items"
          className="text-body d-flex align-items-center gap-3 py-2 px-2 rounded"
        >
          <FiBookmark size={18} aria-hidden="true" />
          <span>Save</span>
        </Nav.Link>

        <Nav.Link
          href="#upgrade"
          aria-label="Upgrade to Pro Subscription"
          className="text-body d-flex align-items-center gap-3 py-2 px-2 rounded"
        >
          <FiZap size={18} aria-hidden="true" />
          <span>Upgrade to Pro</span>
        </Nav.Link>
      </Nav>
    </nav>
  );
}
