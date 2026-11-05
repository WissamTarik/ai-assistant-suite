import { Button, Image } from "react-bootstrap";
import styles from "./ChatInput.module.css";
import { FiX } from "react-icons/fi";

const { uploadedImage, removeImageBtn } = styles;

type TImagePreviewProps = {
  selectedImage: string | undefined;
  setSelectedImage: (value: string | undefined) => void;
};

export default function ImagePreview({
  selectedImage,
  setSelectedImage,
}: TImagePreviewProps) {
  if (!selectedImage) return null;

  return (
    <figure
      aria-label="Attached image preview"
      className="position-relative d-inline-block mb-2"
    >
      <Image
        src={selectedImage}
        alt="Uploaded attachment preview"
        thumbnail
        className={`${uploadedImage}`}
      />
      <Button
        variant="danger"
        size="sm"
        aria-label="Remove attached image"
        className={`${removeImageBtn} position-absolute top-0 end-0 rounded-circle p-0 d-flex align-items-center justify-content-center`}
        onClick={() => setSelectedImage(undefined)}
      >
        <FiX size={12} aria-hidden="true" />
      </Button>
    </figure>
  );
}
