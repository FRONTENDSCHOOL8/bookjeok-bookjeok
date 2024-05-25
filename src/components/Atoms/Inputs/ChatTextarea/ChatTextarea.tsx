import { useEffect, useState } from 'react';
import { Svg } from '@/components/Atoms';
import useBRReplyStore from '@/store/useBRReplyStore';
interface TChatTexarea {
  forwardRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => void;
}

const ChatTextarea = ({
  label,
  forwardRef,
  id,
  name,
  placeholder,
  value,
  required = true,
  rows = 1,
  className,
  onClick,
}: TChatTexarea) => {
  const textareaStyle = {
    className:
      'flex min-h-[40px] flex-row gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 py-2 focus-within:border-bjgray-500 has-[:disabled]:bg-bjgray-200',
    textarea:
      'resize-none h-auto overflow-y-hidden whitespace-pre-wrap bg-bjgray-100 text-b-1-regular text-bjblack placeholder:text-b-1-regular placeholder:text-bjgray-500 focus:outline-none disabled:text-bjgray-500',
  };

  const { replyTo, setReplyTo } = useBRReplyStore((state) => state);

  // textarea 크기 조절
  useEffect(() => {
    const { current: textarea } = forwardRef;
    if (textarea) {
      const handleInput = () => {
        textarea.style.height = 'auto'; // 높이 초기화
        textarea.style.height = textarea.scrollHeight + 'px'; // 스크롤 높이에 맞춰 높이 설정
      };

      textarea.addEventListener('input', handleInput);
      return () => textarea.removeEventListener('input', handleInput);
    }
  }, []);

  // 보내기 버튼 키보드로 작동
  useEffect(() => {
    const { current: textarea } = forwardRef;
    const handleKeydown = (e: KeyboardEvent) => {
      const isPressedEnterKey = e.key === 'Enter';
      const isPressedShiftKey = e.shiftKey;
      const isBackSpaceKey = e.key === 'Backspace';
      if (isPressedShiftKey && isPressedEnterKey) {
        // console.log('Shift + Enter 눌렀을 때 ');
        textarea!.value += '\n';
      }
      if (isPressedEnterKey && !isPressedShiftKey) {
        // console.log('Enter만 눌렀을 때');
        e.preventDefault();
        if (!textarea?.value) {
          return;
        }
        onClick(e);
      }
      if (isBackSpaceKey && replyTo.nickname) {
        if (!textarea?.value) {
          setReplyTo(
            replyTo.id,
            replyTo?.nickname?.substring(0, replyTo.nickname.length - 1)
          );
        }
      }
    };

    textarea?.addEventListener('keydown', handleKeydown);

    return () => {
      textarea?.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <div className={`${textareaStyle.className} ${className}`}>
      <div className="flex flex-grow flex-col">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        {replyTo.nickname ? <p>@{replyTo.nickname}</p> : null}
        <textarea
          ref={forwardRef}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          rows={rows}
          className={textareaStyle.textarea}
        />
      </div>
      <button
        type="button"
        onClick={onClick}
        title="보내기"
        aria-label="보내기"
      >
        <Svg id="send" />
      </button>
    </div>
  );
};

export default ChatTextarea;
