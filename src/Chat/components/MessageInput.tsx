import { ReactElement, useState, useRef} from "react";
import { ChatService } from "../services/chat.service";


export const MessageInput = (): ReactElement => {

    const [message, setMessage] = useState<string>('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const chatService = new ChatService();
    const handleSubmit = async() => {
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
        <div className="chat-input">
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
                }}
                placeholder="Start typing..."

            />

            <button id="send-btn" className="material-symbols-outlined" onClick={handleSubmit}>
                            send
            </button>
        </div>
    )
}