import { ReactElement, useRef } from 'react';

interface Props{
  setValue: (value: string) => void;
  onSubmit: () => void;
  value?: string;
}

export const AutoResizeTextarea = ({setValue, onSubmit, value}:Props) :ReactElement => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = '0px';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
      console.log(textarea.scrollHeight);
    }

    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(); 
    }
  };


  return (
    <textarea
      ref={textareaRef}
      onChange={handleInput}
      rows={1} 
      value={value}
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
  );
};

export default AutoResizeTextarea;