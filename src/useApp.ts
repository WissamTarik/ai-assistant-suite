import { useState } from "react";
import { ChatService } from "./services/classes/chat.services";
import type { TMessage } from "./types/chat.types";

export default function useApp() {
      const chatService = new ChatService();
      const [input, setInput] = useState("");
      const [loading, setLoading] = useState(false);
      const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
      const [messages, setMessages] = useState<TMessage[]>([
        { text: "Hi, I'm ChatGPT, developed by Wissam Tarik", isBot: true },
      ]);
    
      async function handleSend(messageString: string = input,image?:string) {
        if ((!messageString.trim()&&!image) || loading) return;
        const userMessage = { text: messageString, isBot: false,image:image };
        setMessages((prev) => [...prev, userMessage,{text:"",isBot:true}]);
        setInput("");
        setLoading(true);
    
        try {
          const stream =  chatService.streamMessageAsync(messageString, messages,image);
         for await(const chunk of stream){
          setMessages((prev)=>{
            const updated=[...prev]
            const lastIndex=updated.length - 1
            updated[lastIndex]={
              ...updated[lastIndex],
              text:updated[lastIndex].text+chunk
            }
            return updated
          })
         }
         
        } catch (error) {
          console.error("Streaming error:  ",error)
          setMessages((prev) =>{
              const updated=[...prev]
              const lastIndex=updated.length - 1
              updated[lastIndex] = {
                isBot: true,
                text: "Error: Failed to process completion request.",
              };
              return updated
          })
        } finally {
          setLoading(false);
        }
      }
    
      function handleNewChat() {
        setMessages([
          { text: "Hi, I'm ChatGPT, developed by Wissam Tarik", isBot: true },
        ]);
      }
  return {

    showMobileSidebar,
    setShowMobileSidebar,
    handleNewChat,
    handleSend,
    input,
    setInput,
    loading,
    messages,
    showAbout,
    setShowAbout
  }
}
