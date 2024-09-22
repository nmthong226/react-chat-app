import { faMagnifyingGlass, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmileBeam, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import { userList } from "../assets/constant";
import EmojiPicker from "emoji-picker-react";

const ChatPage = () => {
  const [messageInput, setMessageInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleEmoji = (e: any) => {
    setMessageInput(prev => prev + e.emoji);
    setOpen(false);
  }
  const textareaRef = useRef<any>(null); // Create a ref for the textarea
  // Auto scroll to the bottom when messageInput changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [messageInput]);
  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-2xl font-semibold">Chat</h1>
      <div className="flex flex-row w-full h-full mt-8">
        <div className="flex flex-col w-1/3 h-full">
          {/* Search Bar */}
          <div className="flex flex-row w-full relative items-center text-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-2 text-gray-400" />
            <input
              className="w-full bg-transparent border-b-[1px] pl-10 h-14 border-slate-300 outline-none"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          {/* User List */}
          <div className="w-full h-[70vh] mt-4 px-2 space-y-3 overflow-y-auto pb-2">
            {userList.length > 0 ? (
              userList.map((user, index) => (
                <div
                  className="flex w-full h-20 bg-white hover:bg-gray-100 hover:cursor-pointer rounded-lg items-center justify-between px-6 shadow-md"
                  key={index}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={`${user.name}'s avatar`}
                        className="w-10 h-10 rounded-full"
                      />
                      {user.isOnline && <div className="absolute top-0 right-0 size-[10px] rounded-full border-2 border-white bg-green-500" />}
                    </div>
                    <div className="flex flex-col ml-4 max-w-[80%] leading-tight">
                      <h1 className="text-md font-semibold line-clamp-1">{user.name}</h1>
                      <span className="text-gray-500 line-clamp-1 text-md">{user.lastMessage}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">{user.lastMessageTime}</span>
                    <div className={`flex w-5 h-5 rounded-full bg-red-500 text-white items-center justify-center text-sm ${user.unreadedMessages === 0 ? 'invisible' : ''}`}>
                      {user.unreadedMessages}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">No users found</div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-full mx-6 relative">
          {/* User Status Bar */}
          <div className="flex flex-col w-full relative text-md h-14 border-b-[1px] border-slate-300 outline-none">
            <h1 className="text-md font-semibold">Golden Coat</h1>
            <span>From: Rohit</span>
          </div>
          {/* User Chat */}
          <div className="w-full h-[58vh] mt-4 overflow-y-auto pb-4">
            {/* Guest message */}
            <div className="flex w-full mb-4 items-start">
              <div className="flex flex-col max-w-xs items-start">
                <div className="flex flex-row">
                  <img
                    src={userList[0].avatar}
                    alt={`${userList[0].name}'s avatar`}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="bg-slate-200 p-3 rounded-3xl">
                    <span className="text-gray-700 text-md break-words">{userList[0].lastMessage}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{userList[0].lastMessageTime}</span>
              </div>
            </div>
            {/* User message */}
            <div className="flex w-full mb-4 justify-end items-start">
              <div className="flex flex-col max-w-xs items-end">
                <div className="bg-blue-600 p-3 rounded-3xl">
                  <span className="text-white text-md break-words">{userList[0].lastMessage}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Message Input */}
          <div className="flex flex-row items-center w-full min-h-[10vh] max-h-[15vh] mt-2 bg-white rounded-lg border-[1px] text-base absolute bottom-2 left-0 right-0 overflow-y-hidden">
            {/* Emoji Button and Picker */}
            <div className="relative ml-4">
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                className={`size-8 hover:cursor-pointer relative ${open ? 'text-blue-600' : 'text-gray-400'}`}
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
              className="flex w-[80%] bg-transparent min-h-[10vh] max-h-[15vh] pl-6 py-6 border-slate-300 outline-none resize-none overflow-y-auto"
              placeholder="Type a message..."
              value={messageInput}
              aria-label="Chat"
              onChange={(e) => {
                setMessageInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            {/* Attachment and send message */}
            <FontAwesomeIcon
              icon={faPaperclip}
              className="absolute right-16 bottom-7 text-gray-400 size-4 hover:cursor-pointer"
            />
            <button className="absolute size-8 right-4 bottom-5 justify-center items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-600 hover:opacity-90 text-white">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-white size-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage