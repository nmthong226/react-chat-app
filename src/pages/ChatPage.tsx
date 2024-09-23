import { FC } from "react";
import { faMagnifyingGlass, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmileBeam, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

type ChatPageProps = {
  user: User | null;
}

const ChatPage: FC<ChatPageProps> = ({ user }) => {
  // State for chat list, selected chat, new message input, etc.
  const [chatList, setChatList] = useState<ChatList[]>([]);
  const [selectedChat, setSelectedChat] = useState<ChatList | null>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  const [open, setOpen] = useState(false);

  const handleEmoji = (e: any) => {
    setNewMessage(prev => prev + e.emoji);
    setOpen(false);
  }

  const textareaRef = useRef<any>(null); // Reference for the textarea

  // Auto scroll to the bottom when newMessage changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [newMessage]);

  useEffect(() => {
    const savedChatList = localStorage.getItem('chatList');
    if (savedChatList) {
      const parsedChatList = JSON.parse(savedChatList).map((chat: ChatList) => {
        return {
          ...chat,
          chatHistory: chat.chatHistory.map((message) => ({
            ...message,
            timestamp: new Date(message.timestamp), // Convert timestamp string back to Date
          })),
        };
      });
      setChatList(parsedChatList);
    } else if (user && user.chatList) {
      setChatList(user.chatList);
    }
  }, [user]);

  // Save the chatList to localStorage whenever it changes
  useEffect(() => {
    if (chatList.length > 0) {
      localStorage.setItem('chatList', JSON.stringify(chatList));
    }
  }, [chatList]);

  // Automatically select the first chat only if no chat is currently selected
  useEffect(() => {
    if (chatList.length > 0 && !selectedChat) {
      setSelectedChat(chatList[0]);
    }
  }, [chatList, selectedChat]);

  // Handle sending a message
  const sendMessage = () => {
    if (!selectedChat || newMessage.trim() === '' || !user) return;

    const newChatHistory = [...selectedChat.chatHistory, {
      senderId: user.id, // Make sure user is not null
      content: newMessage,
      timestamp: new Date(),
    }];

    const updatedChatList = chatList.map(chat =>
      chat.otherUser.id === selectedChat.otherUser.id
        ? { ...chat, chatHistory: newChatHistory }
        : chat
    );
    setChatList(updatedChatList);
    setSelectedChat({ ...selectedChat, chatHistory: newChatHistory });
    setNewMessage(''); // Clear the input after sending
  };

  // Select a chat from the chatList
  const handleChatSelect = (chat: ChatList) => {
    setSelectedChat(chat);
  };

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
            {chatList.length > 0 || !user ? (
              chatList.map((chat, index) => (
                <div
                  className="flex w-full h-20 bg-white hover:bg-gray-100 hover:cursor-pointer rounded-lg items-center justify-between px-6 shadow-md"
                  key={index}
                  onClick={() => handleChatSelect(chat)}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={chat.otherUser.avatar}
                        alt={`${chat.otherUser.name}'s avatar`}
                        className="w-10 h-10 rounded-full"
                      />
                      {chat.otherUser.isOnline && <div className="absolute top-0 right-0 size-[10px] rounded-full border-2 border-white bg-green-500" />}
                    </div>
                    <div className="flex flex-col ml-4 max-w-[80%] leading-tight">
                      <h1 className="text-md font-semibold line-clamp-1">{chat.otherUser.name}</h1>
                      <span className="text-gray-500 line-clamp-1 text-md">{chat.chatHistory[0].content}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">{chat?.chatHistory[0]?.timestamp.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</span>
                    <div className={`flex w-5 h-5 rounded-full bg-red-500 text-white items-center justify-center text-sm ${chat.otherUser.unreadedMessages === 0 ? 'invisible' : ''}`}>
                      {chat.otherUser.unreadedMessages}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">... Loading user</div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-full mx-6 relative">
          {/* User Status Bar */}
          <div className="flex flex-col w-full relative text-md h-14 border-b-[1px] border-slate-300 outline-none">
            <h1 className="text-md font-semibold">{selectedChat?.otherUser.product}</h1>
            <span>From: {selectedChat?.otherUser.name}</span>
          </div>
          {/* User Chat */}
          <div className="w-full h-[58vh] mt-4 overflow-y-auto pb-4 px-2">
            {selectedChat ? (
              selectedChat.chatHistory.map((message, index) => (
                <div key={index} className="flex w-full mb-4 items-start">
                  {message.senderId !== user?.id ? (
                    // Guest message (left side)
                    <div className="flex flex-col max-w-xs items-start">
                      <div className="flex flex-row">
                        <img
                          src={selectedChat.otherUser.avatar}
                          alt={`${selectedChat.otherUser.name}'s avatar`}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="bg-slate-200 p-3 rounded-3xl">
                          <span className="text-gray-700 text-md break-words">
                            {message.content}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(message.timestamp).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ) : (
                    // User message (right side)
                    <div className="flex w-full justify-end items-start">
                      <div className="flex flex-col max-w-xs items-end">
                        <div className="bg-blue-600 px-6 py-3 rounded-3xl">
                          <span className="text-white text-md break-words">
                            {message.content}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>... Loading chat</div>
            )}
          </div>
          {/* Message Input */}
          <div className="flex flex-row items-center w-full min-h-[10vh] max-h-[15vh] mt-2 bg-white rounded-lg border-[1px] text-base absolute bottom-2 left-0 right-0">
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
        </div>
      </div>
    </div>
  )
}

export default ChatPage