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
    return [{ content: "Welcome to the chat!", role: "assistant" }];
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

