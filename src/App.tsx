import "./App.css";
import { Container } from "react-bootstrap";

import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import ThemeProvider from "./contexts/ThemeContext";
import useApp from "./useApp";
import AboutModal from "./components/About/AboutModal";

function App() {
  const {
    showMobileSidebar,
    setShowMobileSidebar,
    handleNewChat,
    handleSend,
    loading,
    setInput,
    input,
    messages,
    showAbout,
    setShowAbout
  } = useApp();

  return (
    <ThemeProvider>
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="visually-hidden-focusable p-2 bg-primary text-white position-absolute top-0 start-0 z-3"
      >
        Skip to main content
      </a>

      <Container
        fluid
        className="vh-100 p-0 d-flex bg-body text-body overflow-hidden"
      >
        {/* Navigation Sidebar */}
        <Sidebar
          onNewChat={handleNewChat}
          onSelectQuery={(query) => handleSend(query)}
          setShowMobile={setShowMobileSidebar}
          showMobile={showMobileSidebar}
          onOpenAbout={() => setShowAbout(true)}
        />

        {/* Main Workspace Content Area */}
        <MainContent
          setInput={setInput}
          input={input}
          loading={loading}
          handleSend={handleSend}
          messages={messages}
          setShowMobileSidebar={setShowMobileSidebar}
        />
        <AboutModal show={showAbout} onHide={() => setShowAbout(false)} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
