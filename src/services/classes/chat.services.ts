import { chatRepository } from "../../respositories/chat.repository";
import type { TGroqChatMessage, TMessage } from "../../types/chat.types";
import type { IChatService } from "../interfaces/chat.service.interface";

export class ChatService implements IChatService {
    async *streamMessageAsync(userMessage: string, currentMessages: TMessage[],imageDefaultUrl?:string): AsyncIterable<string> {
        const formattedMessages = this.formatMessages(currentMessages)
        if(imageDefaultUrl){
            formattedMessages.push({role:"user",content:[
                {type:"text",text:userMessage||"Describe this image"},
                {type:"image_url",image_url:{url:imageDefaultUrl}}
            ]})
        }else{
            formattedMessages.push({ role: "user", "content": userMessage })

        }
        try {
            yield* chatRepository.fetchCompletion(formattedMessages)
        
        } catch (error) {
            console.error("ChatService Error:", error);
            throw new Error("Failed to fetch response from AI assistant.");
        }
    }
    private formatMessages(currentMessages: TMessage[]): TGroqChatMessage[] {
        return currentMessages.map((message) => {
            return {
                role: message.isBot ? "assistant" : "user",
                content: message.text
            }

        })
    }
}