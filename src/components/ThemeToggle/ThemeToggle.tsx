import { Dropdown } from "react-bootstrap";
import { useTheme, type TTheme } from "../../contexts/ThemeContext";
import { FiCheck, FiMonitor, FiMoon, FiSun } from "react-icons/fi";

type TThemeOption = {
  key: TTheme;
  label: string;
  icon: React.ReactNode;
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleTheme(newTheme: TTheme) {
    setTheme(newTheme);
  }

  const themeOptions: TThemeOption[] = [
    {
      key: "light",
      label: "Light",
      icon: <FiSun size={16} aria-hidden="true" />,
    },
    {
      key: "dark",
      label: "Dark",
      icon: <FiMoon size={16} aria-hidden="true" />,
    },
    {
      key: "system",
      label: "System",
      icon: <FiMonitor size={16} aria-hidden="true" />,
    },
  ];

  const currentThemeLabel =
    themeOptions.find((opt) => opt.key === theme)?.label || "Theme";

  return (
    <Dropdown align="end">
      <Dropdown.Toggle
        className="d-flex align-items-center justify-content-center p-2 border-0 shadow-none"
        size="sm"
        variant="outline-secondary"
        id="theme-dropdown"
        aria-label={`Select theme option. Current theme: ${currentThemeLabel}`}
        aria-haspopup="true"
      >
        {theme === "light" && <FiSun size={18} aria-hidden="true" />}
        {theme === "dark" && <FiMoon size={18} aria-hidden="true" />}
        {theme === "system" && <FiMonitor size={18} aria-hidden="true" />}
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="shadow-sm"
        role="menu"
        aria-labelledby="theme-dropdown"
      >
        {themeOptions.map((option) => {
          const isSelected = theme === option.key;
          return (
            <Dropdown.Item
              key={option.key}
              as="button"
              role="menuitemradio"
              aria-checked={isSelected}
              active={isSelected}
              onClick={() => handleTheme(option.key)}
              className="d-flex align-items-center justify-content-between gap-3 py-2"
            >
              <span className="d-flex align-items-center gap-2">
                {option.icon}
                <span>{option.label}</span>
              </span>
              {isSelected && (
                <FiCheck
                  size={14}
                  aria-hidden="true"
                  className="text-primary"
                />
              )}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
