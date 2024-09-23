// MessageInput.tsx
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import EmojiPicker from "emoji-picker-react";

type MessageInputProps = {
    newMessage: string;
    setNewMessage: (message: string) => void;
    sendMessage: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    handleEmoji: (emoji: any) => void;
};

const MessageInput: FC<MessageInputProps> = ({
    newMessage,
    setNewMessage,
    sendMessage,
    open,
    setOpen,
    handleEmoji,
}) => {
    return (
        <div className="flex flex-row items-center w-full min-h-[10vh] max-h-[15vh] mt-2 bg-white rounded-lg border-[1px] text-base absolute bottom-2 left-0 right-0">
            {/* Emoji Button and Picker */}
            <div className="relative ml-4">
                <FontAwesomeIcon
                    icon={faFaceSmileBeam}
                    className={`size-4 sm:size-8 hover:cursor-pointer relative ${open ? 'text-blue-600' : 'text-gray-400'}`}
                    onClick={() => setOpen(!open)}
                />
                {/* Emoji Picker */}
                <div className="absolute bottom-full mb-6 z-50">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                </div>
            </div>
            {/* Text area for typing message */}
            <textarea
                rows={1}
                className="flex w-[60%] sm:w-[80%] bg-transparent min-h-[10vh] max-h-[15vh] pl-2 sm:pl-6 py-6 text-sm sm:text-base border-slate-300 outline-none resize-none overflow-y-auto"
                placeholder="Type a message..."
                value={newMessage}
                aria-label="Chat"
                onChange={(e) => {
                    setNewMessage(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
            />
            {/* Attachment and send message */}
            <FontAwesomeIcon
                icon={faPaperclip}
                className="absolute right-16 bottom-7 text-gray-400 size-4 hover:cursor-pointer"
            />
            <button
                className="absolute size-8 right-4 bottom-5 justify-center items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-600 hover:opacity-90 text-white"
                onClick={sendMessage}
            >
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-white size-4"
                />
            </button>
        </div>
    );
};

export default MessageInput;