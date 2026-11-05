import type { TMessage } from "../../types/chat.types";
import ChatMessage from "../ChatMessage/ChatMessage";
import useChatList from "./useChatList";

type TChatListProps = {
  messages: TMessage[];
};

export default function ChatList({ messages }: TChatListProps) {
  const { messageEndRef } = useChatList(messages);

  return (
    <section
      aria-label="Chat messages history"
      role="log"
      aria-live="polite"
      aria-relevant="additions text"
      className="chat-list flex-grow-1 overflow-y-auto w-100 px-3"
    >
      {messages.map((message, index) => (
        <ChatMessage key={`message-${index}`} message={message} />
      ))}
      <div ref={messageEndRef} tabIndex={-1} aria-hidden="true" />
    </section>
  );
}
