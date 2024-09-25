import { FC } from "react";
import { useEffect, useRef, useState } from "react";
import MessageInput from "../components/MessageInput";
import MessageList from "../components/MessageList";
import { isSingleEmoji } from "../utils/checkSingleEmoji";

type ChatPageProps = {
  user: User | null;
}

const ChatPage: FC<ChatPageProps> = ({ user }) => {
  // State for chat list, selected chat, new message input, etc.
  const [chatList, setChatList] = useState<ChatList[]>([]);
  const [selectedChat, setSelectedChat] = useState<ChatList | null>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to track search input

  // Filter chatList based on the search query (case-insensitive)
  const filteredChatList = chatList.filter((chat) =>
    chat.otherUser.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="flex flex-row w-full h-full mt-4 sm:mt-8">
        {/* User List */}
        <MessageList
          filteredChatList={filteredChatList}
          handleChatSelect={handleChatSelect}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedChat={selectedChat}
          user={user}
        />
        <div className="flex flex-col w-2/3 h-full mx-2 sm:mx-6 relative">
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
                    <>
                      <div className="flex flex-col max-w-xs items-start">
                        <div className="flex flex-row relative items-center group">
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
                          {/* Absolute div positioned to the right - hidden by default, shown on hover */}
                          <div className="flex-row absolute right-[-90px] bg-gray-300 rounded-xl p-5 h-8 w-20 items-center justify-center hidden group-hover:flex">
                            {/* Content of the absolute div */}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(message.timestamp).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false })}
                        </span>
                      </div>
                    </>
                  ) : (
                    // User message (right side)
                    <div className="flex w-full justify-end items-start">
                      <div className="flex flex-col max-w-xs items-end">
                        {isSingleEmoji(message.content) ? (
                          <div className="text-5xl">
                            {message.content}
                          </div>
                        ) : (
                          <div className="bg-blue-600 px-6 py-3 rounded-3xl">
                            <span className="text-white text-md break-words">
                              {message.content}
                            </span>
                          </div>
                        )}
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
          <MessageInput
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
            open={open}
            setOpen={setOpen}
            handleEmoji={handleEmoji}
          />
        </div>
      </div>
    </div >
  )
}

export default ChatPage