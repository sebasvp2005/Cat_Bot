import { ReactElement } from "react";
import { ChatService } from "../services/chat.service";

export const BotInteraction = (): ReactElement => {

    const options = [
        {name: "Feed", action : "*Feeds the cat*"},
        {name: "Pet", action : "*Pets the cat*"},
        {name: "Meow", action : "*Meows*"},
    ];

    const chatservice = new ChatService();


    const makeInteraction = (action: string) => {
        chatservice.SendMessage(action);        
    }

    return(
        <div className="interact grid items-center">
            <div>

                <img src="images/cat2.webp" alt="Gato" className="cat-image"/>
                <div className="buttons">
                    {
                        options.map((option, index) => (
                            <button key={index} onClick={() =>makeInteraction(option.action)}> {option.name} </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}