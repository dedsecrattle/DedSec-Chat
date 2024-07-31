import { create } from "zustand";

interface ConversationState {
  selectedConversation: null | string;
  messages: string[];
}

interface ConversationActions {
  setSelectedConversation: (selectedConversation: string) => void;
  setMessages: (messages: string[]) => void;
}

const useConversation = create<ConversationState & ConversationActions>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set(() => ({selectedConversation: selectedConversation})),
  messages: [],
  setMessages: (messages) => set(() => ({ messages: messages })),
}));

export default useConversation;