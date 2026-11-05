import { Row } from "react-bootstrap";
import { FiCode, FiCpu, FiFeather, FiHelpCircle } from "react-icons/fi";
import styles from "./QuickStarter.module.css";
import QuickStarterItem from "./QuickStarterItem";

type TQuickStartersProps = {
  onSelectStarter: (prompt: string) => void;
};

const STARTERS = [
  {
    id: "explain-error",
    icon: (
      <FiHelpCircle
        size={20}
        className="text-primary mb-2"
        aria-hidden="true"
      />
    ),
    title: "Explain Error",
    prompt: "Can you help me debug this error in my code?",
  },
  {
    id: "csharp-pattern",
    icon: <FiCpu size={20} className="text-success mb-2" aria-hidden="true" />,
    title: "C# Design Pattern",
    prompt:
      "Write a C# Strategy Pattern example for a payment processing system.",
  },
  {
    id: "refactor-react",
    icon: <FiCode size={20} className="text-warning mb-2" aria-hidden="true" />,
    title: "Refactor React",
    prompt:
      "How can I optimize and clean up a large React TypeScript component?",
  },
  {
    id: "tech-writing",
    icon: <FiFeather size={20} className="text-info mb-2" aria-hidden="true" />,
    title: "Technical Writing",
    prompt:
      "Draft a concise technical architecture overview for a REST API project.",
  },
];

export type TStarterItem = (typeof STARTERS)[number];
const { starter } = styles;

export default function QuickStarter({ onSelectStarter }: TQuickStartersProps) {
  return (
    <section
      aria-labelledby="quick-starter-title"
      className={`${starter} p-4 my-auto w-100`}
    >
      <h2
        id="quick-starter-title"
        className="h5 text-center text-secondary mb-4"
      >
        What would you like to build today?
      </h2>
      <Row className="g-3">
        {STARTERS.map((item) => (
          <QuickStarterItem
            item={item}
            key={item.id}
            onSelectStarter={onSelectStarter}
          />
        ))}
      </Row>
    </section>
  );
}
