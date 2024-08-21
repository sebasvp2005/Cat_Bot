
import { useHistoryStore } from "./history.store"

export class ChatService {

    addMessage: (message: {content: string, role: string}) => void;
    history : any;

    constructor() {
        this.addMessage = useHistoryStore.getState().addMessage;
        this.history = useHistoryStore.getState().messages;
    }
    


    async SendMessage(message: string) {
        this.addMessage({content: message, role: 'user'});

        let reversedHistory = this.history.reverse();

        //api calll

        const response = await fetch("https://api-chatbot-gato.vercel.app/generate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: message,
                context: reversedHistory
            })
        })

        try{
            const res = await response.json()
            this.addMessage(res)
        } catch(e){
            console.log(e)
        }

    }


}