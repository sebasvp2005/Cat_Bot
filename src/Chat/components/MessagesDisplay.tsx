import { ReactElement } from "react";
import { MessageCard } from "./MessageCard";
import { useHistoryStore } from "../services/history.store";

export const MessagesDisplay = (): ReactElement => {
    const messages = useHistoryStore((state) => state.messages);
    return (    
        <div className="chatbox grow  flex flex-col-reverse gap-4">
            {
                messages.map((message, index) => (
                    <MessageCard key={index} message={message.content} type={message.role}></MessageCard>
                ))
            }
        </div>
    )
}