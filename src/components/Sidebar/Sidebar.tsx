import DesktopSidebar from "./DesktopSidebar";
import SidebarContent from "./SidebarContent";

type TSidebarProps = {
  onSelectQuery: (query: string) => void;
  onNewChat: () => void;
  showMobile: boolean;
  setShowMobile: (value: boolean) => void;
  onOpenAbout:()=>void;
};

export default function Sidebar({
  onNewChat,
  onSelectQuery,
  showMobile,
  setShowMobile,
  onOpenAbout,
}: TSidebarProps) {
  return (
    <aside aria-label="Main Navigation Sidebar">
      <DesktopSidebar
        sidebarContent={
          <SidebarContent
            onNewChat={onNewChat}
            onSelectQuery={(query) => onSelectQuery(query)}
            onCloseMobile={() => setShowMobile(false)}
            onOpenAbout={onOpenAbout}
          />
        }
        showMobile={showMobile}
        onCloseMobile={() => setShowMobile(false)}
      />
    </aside>
  );
}
