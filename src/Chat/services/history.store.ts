import { create } from "zustand";
import { Message } from "../models/Message.model";

export interface HistoryStore {
    messages: Message[];
    addMessage: (message: Message) => void;
}

export const useHistoryStore = create<HistoryStore>((set) => ({
    messages: [],
    addMessage: (message) => set((state) => ({ messages: [ message, ...state.messages] })),
}));

