import styles from "./ChatInput.module.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import UploadImage from "./UploadImage";
import React from "react";

type TInputFormProps = {
  input: string;
  setInput: (value: string) => void;
  onSend: (message: string, image?: string) => void;
  loading: boolean;
  selectedImage: string | undefined;

  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    input: string,
    onSend: (message: string, image?: string) => void,
  ) => void;

  handlePaste: (
    e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  handleSend: (
    input: string,
    onSend: (message: string, image?: string) => void,
  ) => void;

  fileInputRef: React.RefObject<HTMLInputElement | null>;
};

export default function InputForm({
  input,
  setInput,
  onSend,
  loading,
  selectedImage,
  handleImageChange,
  handleKeyDown,
  handlePaste,
  handleSend,
  fileInputRef,
}: TInputFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input, onSend);
  };

  return (
    <Form onSubmit={handleSubmit} role="search" aria-label="Send message form">
      <InputGroup>
        <UploadImage
          loading={loading}
          handleImageChange={handleImageChange}
          fileInputRef={fileInputRef}
        />

        <Form.Control
          id="chat-message-input"
          aria-label="Send a message or attach an image"
          placeholder="Send a message or attach an image..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, input, onSend)}
          onPaste={handlePaste}
          disabled={loading}
          className={`${styles.groupInput} bg-body text-body border-body-secondary shadow-none`}
        />

        <Button
          type="submit"
          disabled={loading || (!input.trim() && !selectedImage)}
          variant="primary"
          aria-label="Send message"
          className="d-flex align-items-center justify-content-center px-3"
        >
          <FiSend size={18} aria-hidden="true" />
        </Button>
      </InputGroup>
    </Form>
  );
}
