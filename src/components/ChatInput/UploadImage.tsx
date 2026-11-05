import { Button } from "react-bootstrap";
import { FiPaperclip } from "react-icons/fi";
import React from "react";

type TUploadImageProps = {
  loading: boolean;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
};

export default function UploadImage({
  loading,
  handleImageChange,
  fileInputRef,
}: TUploadImageProps) {
  return (
    <>
      <input
        id="chat-file-upload"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="d-none"
        aria-label="Upload an image"
      />

      <Button
        type="button"
        variant="outline-secondary"
        onClick={() => fileInputRef.current?.click()}
        disabled={loading}
        aria-label="Attach an image file"
        className="text-body border-body-secondary d-flex align-items-center justify-content-center"
      >
        <FiPaperclip size={18} aria-hidden="true" />
      </Button>
    </>
  );
}
