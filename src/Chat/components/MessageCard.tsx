import { ReactElement } from "react";

interface MessageCardProps {
    message: string;
    type: string;
}


export const MessageCard = ({message, type} : MessageCardProps): ReactElement => {

    return(
        <div className =  {`chat ${type}`} >     
            {
                type === 'assistant' &&
                <span className="material-symbols-outlined">Pets</span>
            }
            <p>

                {message}
            </p>
        </div>
    )
}