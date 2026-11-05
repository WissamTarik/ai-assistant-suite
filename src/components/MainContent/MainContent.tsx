import ChatList from "../ChatList/ChatList";
import type { TMessage } from "../../types/chat.types";
import ChatInput from "../ChatInput/ChatInput";
import TopHeader from "./TopHeader";
import Loading from "./Loading";
import QuickStarter from "../QuickStarter/QuickStarter";

type TMainContentProps = {
  setShowMobileSidebar: (value: boolean) => void;
  messages: TMessage[];
  loading: boolean;
  input: string;
  setInput: (value: string) => void;
  handleSend: (messageString: string, image?: string) => void;
};

export default function MainContent({
  setShowMobileSidebar,
  messages,
  loading,
  input,
  setInput,
  handleSend,
}: TMainContentProps) {
  const showStarters = messages.length <= 1;

  return (
    <main
      id="main-content"
      aria-label="Chat Workspace"
      className="flex-grow-1 d-flex flex-column h-100"
    >
      {/* Top Header Bar (Mobile only) */}
      <TopHeader setShowMobileSidebar={setShowMobileSidebar} />

      {/* Main Conversation Viewport */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden min-width-0">
        {showStarters ? (
          <QuickStarter onSelectStarter={(prompt) => handleSend(prompt)} />
        ) : (
          <ChatList messages={messages} />
        )}
      </div>

      {/* Live Loading Indicator */}
      {loading && <Loading />}

      {/* Input Section */}
      <ChatInput
        input={input}
        setInput={setInput}
        loading={loading}
        onSend={handleSend}
      />
    </main>
  );
}
