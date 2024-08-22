import { ReactElement } from "react";
import './Chat.css';
import { useHistoryStore } from "../services/history.store";
import { MessagesDisplay } from "../components/MessagesDisplay";
import { MessageInput } from "../components/MessageInput";
import { BotInteraction } from "../components/BotInteraction";


export const Chat = (): ReactElement => {

    const addMessage = useHistoryStore((state) => state.addMessage);


    
    return(
        
        <section className="chat-box-section">

            <div className="all-container w-[80%] h-full mx-auto min-w-[1024px] max-lg:min-w-[100%] grid grid-cols-[30%_auto]">

                <BotInteraction/>
                
                <div className="chatbot flex flex-col my-14">
                    <MessagesDisplay />

                    <MessageInput />
                </div>
                
            </div>
        </section>
    )
}