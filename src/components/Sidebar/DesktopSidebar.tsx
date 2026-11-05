import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";

type TDesktopSidebarProps = {
  sidebarContent: React.ReactNode;
  showMobile: boolean;
  onCloseMobile: () => void;
};

export default function DesktopSidebar({
  sidebarContent,
  showMobile,
  onCloseMobile,
}: TDesktopSidebarProps) {
  const { theme } = useTheme();

  return (
    <Offcanvas
      show={showMobile}
      onHide={onCloseMobile}
      responsive="lg"
      aria-labelledby="sidebar-brand-heading"
      className="bg-body-tertiary text-body border-end border-body-secondary min-vh-100"
      data-bs-theme={theme}
    >
      <Offcanvas.Body className="p-0 h-100">{sidebarContent}</Offcanvas.Body>
    </Offcanvas>
  );
}
