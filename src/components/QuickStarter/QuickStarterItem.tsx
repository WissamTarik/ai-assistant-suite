import styles from "./QuickStarter.module.css";
import { Card, Col } from "react-bootstrap";
import type { TStarterItem } from "./QuickStarter";

type TQuickStartersItemProps = {
  onSelectStarter: (prompt: string) => void;
  item: TStarterItem;
};

export default function QuickStarterItem({
  onSelectStarter,
  item,
}: TQuickStartersItemProps) {
  return (
    <Col xs={12} sm={6}>
      <Card
        as="button"
        type="button"
        aria-label={`Start prompt: ${item.title} - ${item.prompt}`}
        className={`${styles.card} h-100 w-100 text-start shadow-sm border-body-secondary bg-body-tertiary cursor-pointer hover-card text-decoration-none`}
        onClick={() => onSelectStarter(item.prompt)}
      >
        <Card.Body className="p-3">
          {item.icon}
          <Card.Title as="h3" className="fs-6 fw-bold text-body">
            {item.title}
          </Card.Title>
          <Card.Text className="small text-secondary mb-0">
            {item.prompt}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
