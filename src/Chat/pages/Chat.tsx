import { ReactElement } from "react";
import './Chat.css';
import { useHistoryStore } from "../services/history.store";
import { MessagesDisplay } from "../components/MessagesDisplay";
import { MessageInput } from "../components/MessageInput";


export const Chat = (): ReactElement => {

    const addMessage = useHistoryStore((state) => state.addMessage);

    addMessage({content: "Hello! I'm a cat, how can I help you?", role: "assistant"});
    addMessage({content: "I'm hungry", role: "user"});

    
    return(
        
        <section className="chat-box-section">

            <div className="all-container w-[80%] h-full mx-auto min-w-[1024px] max-lg:min-w-[100%] grid grid-cols-[30%_auto]">

                <div className="interact">
                    <img src="images/cat2.webp" alt="Gato" className="cat-image"/>
                    <div className="buttons">
                            <button>Feed</button>
                            <button>Pet</button>
                            <button>Meow</button>
                    </div>
                </div>
                <div className="chatbot flex flex-col my-14">
                    <MessagesDisplay />

                    <MessageInput />
                </div>
                
            </div>
        </section>
    )
}