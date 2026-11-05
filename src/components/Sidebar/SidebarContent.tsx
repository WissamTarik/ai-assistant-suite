import { Button } from "react-bootstrap";
import styles from "./Sidebar.module.css";
import { FiPlus } from "react-icons/fi";
import SidebarActions from "./SidebarActions";
import SidebarQuery from "./SidebarQuery";
import SidebarHeader from "./SidebarHeader";

const { sidebar, upperside } = styles;

type TSidebarContentProps = {
  onSelectQuery: (query: string) => void;
  onNewChat: () => void;
  onCloseMobile: () => void;
  onOpenAbout: () => void;
};

export default function SidebarContent({
  onCloseMobile,
  onNewChat,
  onSelectQuery,
  onOpenAbout
}: TSidebarContentProps) {
  return (
    <div
      className={`${sidebar} d-flex flex-column justify-content-between h-100 p-3 bg-body-tertiary text-body`}
    >
      <div className={`${upperside} overflow-auto`}>
        <SidebarHeader onCloseMobile={onCloseMobile} />

        <Button
          variant="primary"
          aria-label="Start a new chat"
          className="w-100 d-flex align-items-center mb-4 justify-content-center gap-2 py-2 fw-semibold"
          onClick={() => {
            onNewChat();
            onCloseMobile();
          }}
        >
          <FiPlus size={18} aria-hidden="true" />
          <span>New Chat</span>
        </Button>

        <SidebarQuery
          onCloseMobile={onCloseMobile}
          onSelectQuery={onSelectQuery}
        />
      </div>

      <SidebarActions
        onOpenAbout={() => {
          onOpenAbout();
          onCloseMobile();
        }}
      />
    </div>
  );
}
