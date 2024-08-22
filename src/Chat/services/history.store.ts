import { create } from "zustand";
import { Message } from "../models/Message.model";

const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem("history", JSON.stringify(messages));
};


const loadMessagesFromLocalStorage = (): Message[] => {
    const storedMessages = localStorage.getItem("history");
    if (storedMessages) {
        return JSON.parse(storedMessages);
    }
    return [{ content: "¡Nyaa~! Hola, humano. Soy Kitty, un gato cute kawaii que siempre está listo para ronronear y alegrarte el día. 🐾✨ Con mis patitas suaves y mi cola esponjosa, ¡te traigo mucha energía y abrazos cálidos! ¿Cómo puedo ayudarte hoy, nya?", role: "assistant" }];
};
export interface HistoryStore {
    messages: Message[];
    addMessage: (message: Message) => void;
}

export const useHistoryStore = create<HistoryStore>((set) => ({
    messages: loadMessagesFromLocalStorage(),
    addMessage: (message: Message) =>
        set((state) => {
            const updatedMessages = [message, ...state.messages];
            saveMessagesToLocalStorage(updatedMessages);
            return { messages: updatedMessages };
        }),
}));

