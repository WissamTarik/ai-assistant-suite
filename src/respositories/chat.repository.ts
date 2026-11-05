import { groq } from "../config/groqClient";
import type {
    TGroqChatMessage,
} from "../types/chat.types";
import type { ChatCompletionChunk } from "groq-sdk/resources/chat.mjs";
import type { Stream } from "groq-sdk/core/streaming.mjs";

export const chatRepository = {

    async *fetchCompletion(
        messagesHistory: TGroqChatMessage[]
    ): AsyncIterable<string> {

        const isVisionRequired =
            this.hasImage(messagesHistory);


        const model =   await this.resolveActiveModel(isVisionRequired);

        

        const stream: Stream<ChatCompletionChunk> =
            await groq.chat.completions.create({
                model,
                messages: messagesHistory,
                temperature: 0.7,
                max_tokens: 500,
                stream:true
            });
          for await(const chunk of stream){
            const content=chunk.choices[0]?.delta?.content||""
            if(content)
                yield content
          }
    },

    hasImage(
        messageHistory: TGroqChatMessage[]
    ): boolean {

        return messageHistory.some((message) =>
            Array.isArray(message.content)
                ? message.content.some(
                    (part) => part.type === "image_url"
                )
                : false
        );
    },

    async resolveActiveModel(
        isVision: boolean
    ): Promise<string> {

        try {
            const availableModels =
                await groq.models.list();

            const activeModelIds =
                availableModels.data.map(
                    (model) => model.id
                );

            if (isVision) {

                const preferredVisionModels = [
                    "qwen/qwen3.8-27b",
                ];

                return (
                    preferredVisionModels.find(
                        (model) =>
                            activeModelIds.includes(model)
                    ) ?? "qwen/qwen3.8-27b"
                );
            }

            const preferredTextModels = [
                "openai/gpt-oss-20b",
                "openai/gpt-oss-120b",
            ];

            return (
                preferredTextModels.find(
                    (model) =>
                        activeModelIds.includes(model)
                ) ?? "openai/gpt-oss-20b"
            );

        } catch {

            return isVision
                ? "qwen/qwen3.8-27b"
                : "openai/gpt-oss-20b";
        }
    },
};