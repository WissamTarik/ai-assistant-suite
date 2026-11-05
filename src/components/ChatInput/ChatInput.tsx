import styles from "./ChatInput.module.css";
import ImagePreview from "./ImagePreview";
import useChatInput from "./useChatInput";
import InputForm from "./InputForm";

const { maxWidthChat } = styles;

type TChatInputProps = {
  input: string;
  setInput: (value: string) => void;
  onSend: (message: string, image?: string) => void;
  loading: boolean;
};

export default function ChatInput({
  input,
  setInput,
  onSend,
  loading,
}: TChatInputProps) {
  const {
    selectedImage,
    setSelectedImage,
    handleImageChange,
    handleKeyDown,
    handlePaste,
    handleSend,
    fileInputRef,
  } = useChatInput();

  return (
    <footer
      aria-label="Chat input region"
      className="w-100 p-3 d-flex flex-column align-items-center"
    >
      <div className={`${maxWidthChat} w-100`}>
        {/* Selected Image Preview with polite live region */}
        <div aria-live="polite" aria-atomic="true">
          <ImagePreview
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>

        <InputForm
          input={input}
          setInput={setInput}
          onSend={onSend}
          loading={loading}
          selectedImage={selectedImage}
          handleImageChange={handleImageChange}
          handleKeyDown={handleKeyDown}
          handlePaste={handlePaste}
          handleSend={handleSend}
          fileInputRef={fileInputRef}
        />
      </div>

      <small className="text-secondary mt-2 text-center fs-7">
        ChatGPT may make mistakes. Verify important info.
      </small>
    </footer>
  );
}
