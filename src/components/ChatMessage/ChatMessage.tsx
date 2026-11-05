import styles from "./ChatMessage.module.css";
import userImg from "../../assets/user-icon.png";
import chatGPTLogo from "../../assets/chatgptLogo.svg";
import { Image } from "react-bootstrap";
import type { TMessage } from "../../types/chat.types";
import ShareModal from "./ShareModal";
import DownloadMessageDropdown from "./DownloadMessageDropdown";
import CopyMessageBtn from "./CopyMessageBtn";
import ShareBtn from "./ShareBtn";
import useChatMessage from "./useChatMessage";

type TChatMessageProps = {
  message: TMessage;
};

const { botMessage, userMessage, sender, uploadedImage, textStyle } = styles;

export default function ChatMessage({ message }: TChatMessageProps) {
  const { text, isBot, image } = message;
  const { showShareModal, setShowShareModal } = useChatMessage(text);

  return (
    <article
      aria-label={`${isBot ? "Assistant" : "User"} message`}
      className={`d-flex gap-2 gap-sm-3 p-2 p-sm-3 my-2 rounded w-100 ${
        isBot ? botMessage : userMessage
      }`}
    >
      <img
        src={isBot ? chatGPTLogo : userImg}
        alt={isBot ? "Assistant Avatar" : "User Avatar"}
        width={36}
        height={36}
        className={`avatar rounded-circle flex-shrink-0 ${sender}`}
      />

      <div className="d-flex flex-column gap-2 min-w-0 w-100">
        {image && (
          <div className="mw-100">
            <Image
              src={image}
              alt="User-uploaded visual attachment"
              rounded
              className={`${uploadedImage} img-fluid`}
            />
          </div>
        )}

        {text && (
          <p
            className={`mb-0 leading-relaxed text-body text-break fs-6 ${textStyle}`}
          >
            {text}
          </p>
        )}

        {isBot && text && (
          <footer className="d-flex flex-wrap align-items-center gap-1 gap-sm-2 mt-1 pt-1">
            <CopyMessageBtn text={text} />
            <DownloadMessageDropdown text={text} />
            <ShareBtn onOpenModal={() => setShowShareModal(true)} />
          </footer>
        )}
      </div>

      <ShareModal
        text={text}
        show={showShareModal}
        onHide={() => setShowShareModal(false)}
      />
    </article>
  );
}
