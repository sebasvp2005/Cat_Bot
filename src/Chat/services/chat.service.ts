
import { useHistoryStore } from "./history.store"

export class ChatService {

    addMessage: (message: {content: string, role: string}) => void;
    history : any;
    setWaitingResponse: (value: boolean) => void;

    constructor() {
        this.addMessage = useHistoryStore.getState().addMessage;
        this.history = useHistoryStore.getState().messages;
        this.setWaitingResponse = useHistoryStore.getState().setWaitingResponse;
    }
    


    async SendMessage(message: string) {
        this.addMessage({content: message, role: 'user'});

        let reversedHistory = this.history.reverse();
        this.setWaitingResponse(true);

        console.log({
            prompt: message,
            context: reversedHistory
        })


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
            if(!res.content || !res.role) throw new Error('Invalid response')
            this.addMessage(res)
        } catch(e){
            console.log(e)
            this.addMessage({content: "¡Nyaa~! Parece que hubo un error al intentar comunicarme con mi servidor. 😿 Por favor, inténtalo de nuevo más tarde.", role: "assistant"})
        }
        this.setWaitingResponse(false);

    }


}