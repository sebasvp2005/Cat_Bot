import { ReactElement, useState, useRef} from "react";
import { ChatService } from "../services/chat.service";
import { useHistoryStore } from "../services/history.store";


export const MessageInput = (): ReactElement => {

    const [message, setMessage] = useState<string>('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const chatService = new ChatService();
    const waitingResponse = useHistoryStore(state => state.waitingResponse);
    const handleSubmit = async() => {
        if(waitingResponse) return;
        chatService.SendMessage(message);
        setMessage('');

    }
      
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = textareaRef.current;
      
        if (textarea) {
            textarea.style.height = '0px';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
            setMessage(e.target.value);
        }
      
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(); 
        }
    };

    return (
        <div className= "chat-input bg-white transition-all" style={ waitingResponse ? { backgroundColor: '#d3d3d3', color: "gray"} : {}}>
            <textarea
                ref={textareaRef}
                onChange={handleInput}
                rows={1} 
                value={message}
                onKeyDown={handleKeyDown}
                style={{
                    overflowY:'auto',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '200px',
                    resize: 'none',
                    padding: '0',
                    border: 'none',
                    background: 'transparent',
                }}
                placeholder="Start typing..."

            />

            <button id="send-btn" className="material-symbols-outlined" onClick={handleSubmit}>
                            send
            </button>
        </div>
    )
}