import { Button } from "react-bootstrap";
import styles from "./Sidebar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import chatGPTLogo from "../../assets/chatgptLogo.svg";
import { FiX } from "react-icons/fi";

const { logo, brand } = styles;

type TSidebarHeaderProps = {
  onCloseMobile: () => void;
};

export default function SidebarHeader({ onCloseMobile }: TSidebarHeaderProps) {
  return (
    <header className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom border-body-secondary">
      <div className="d-flex align-items-center gap-2 pt-2">
        <img
          src={chatGPTLogo}
          alt="ChatGPT Application Logo"
          className={logo}
          width={26}
          height={26}
        />
        <span
          id="sidebar-brand-heading"
          className={`${brand} fw-bold fs-5 text-body`}
        >
          ChatGPT
        </span>
      </div>

      <div className="d-flex align-items-center gap-2">
        {/* Theme Toggle on Large Screens */}
        <div className="d-none d-lg-block" aria-label="Theme settings">
          <ThemeToggle />
        </div>

        {/* Close Drawer Button for Mobile */}
        <Button
          variant="link"
          aria-label="Close sidebar menu"
          className="text-body d-lg-none p-0 border-0 ms-2"
          onClick={onCloseMobile}
        >
          <FiX size={22} aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
}
