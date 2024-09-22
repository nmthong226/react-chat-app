import { faMagnifyingGlass, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmileBeam, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { userList } from "../assets/constant";

const ChatBox = () => {
  const [messageInput, setMessageInput] = useState("");
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
                  className="flex w-full h-20 bg-white rounded-lg items-center justify-between px-6 shadow-md"
                  key={index}
                >
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt={`${user.name}'s avatar`}
                      className="w-10 h-10 rounded-full"
                    />
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
        <div className="flex flex-col w-2/3 h-full px-8">
          {/* User Status Bar */}
          <div className="flex flex-col w-full relative text-md h-14 border-b-[1px] border-slate-300 outline-none">
            <h1 className="text-md font-semibold">Golden Coat</h1>
            <span>From: Rohit</span>
          </div>
          {/* User Chat */}
          <div className="w-full h-[58vh] mt-4 px-2 space-y-3 overflow-y-auto pb-2">

          </div>
          <div className="flex flex-row items-center w-[700px] min-h-[10vh] mt-2 px-2 overflow-y-auto bg-white rounded-lg border-[1px] text-base fixed bottom-10">
            <FontAwesomeIcon icon={faFaceSmileBeam} className="absolute left-4 bottom-5 text-gray-400 size-8 hover:cursor-pointer" />
            <textarea
              rows={1}
              className="flex items-center w-full bg-transparent pl-14 pr-24 border-slate-300 outline-none resize-none"
              placeholder="Type a message..."
              value={messageInput}
              aria-label="Chat"
              onChange={(e) => {
                setMessageInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            <FontAwesomeIcon icon={faPaperclip} className="flex absolute right-16 bottom-7 text-gray-400 size-4 hover:cursor-pointer" />
            <button className="flex absolute size-8 right-4 bottom-5 justify-center items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-600 hover:opacity-90 text-white hover:cursor-pointer">
              <FontAwesomeIcon icon={faPaperPlane} className="absolute text-white size-4 hover:cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBox