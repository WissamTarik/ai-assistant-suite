import { Dropdown } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import useChatMessage from "./useChatMessage";

type TDownloadMessageDropdownProps = {
  text: string;
};

export default function DownloadMessageDropdown({
  text,
}: TDownloadMessageDropdownProps) {
  const { handleExport } = useChatMessage(text);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        size="sm"
        id={`export-dropdown-${text.slice(0, 8)}`}
        aria-label="Export response options"
        className="d-flex align-items-center gap-1 py-1 px-2 border-0 bg-transparent text-secondary shadow-none"
      >
        <FiDownload size={16} aria-hidden="true" />
        <span className="small d-none d-sm-inline">Export</span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="start" className="shadow-sm">
        <Dropdown.Item
          as="button"
          onClick={() => handleExport("md")}
          className="small"
        >
          Export as Markdown (.md)
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => handleExport("txt")}
          className="small"
        >
          Export as Text (.txt)
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => handleExport("pdf")}
          className="small"
        >
          Export as PDF (.pdf)
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
