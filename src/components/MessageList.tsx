// MessageList.tsx
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type MessageListProps = {
  filteredChatList: ChatList[];
  handleChatSelect: (chat: ChatList) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedChat: ChatList | null;
  user: User | null;
};

const MessageList: FC<MessageListProps> = ({
  filteredChatList,
  handleChatSelect,
  searchQuery,
  setSearchQuery,
  user,
}) => {
  return (
    <div className="flex flex-col w-1/4 xsm:w-1/3 h-full">
      {/* Search Bar */}
      <div className="flex flex-row w-full relative items-center text-md">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-0 xsm:left-2 text-gray-400" />
        <input
          className="w-full bg-transparent border-b-[1px] pl-6 xsm:pl-10 h-14 border-slate-300 outline-none"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="w-full h-[70vh] mt-4 px-2 space-y-3 overflow-y-auto pb-2">
        {filteredChatList.length > 0 || !user ? (
          filteredChatList.map((chat, index) => (
            <div
              className="flex w-full h-20 bg-white hover:bg-gray-100 hover:cursor-pointer rounded-lg items-center justify-center xsm:justify-between px-2 lg:px-6 shadow-md"
              key={index}
              onClick={() => handleChatSelect(chat)}
            >
              <div className="flex items-center">
                <div className="flex relative shrink-0">
                  <img
                    src={chat.otherUser.avatar}
                    alt={`${chat.otherUser.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                  {chat.otherUser.isOnline && <div className="absolute top-0 right-0 size-[10px] rounded-full border-2 border-white bg-green-500" />}
                  <div className={`flex absolute bottom-0 right-0 size-4 smd:size-5 rounded-full bg-red-500 text-white items-center justify-center text-xsm smd:text-sm xsm:hidden ${chat.otherUser.unreadedMessages === 0 ? 'invisible' : ''}`}>
                    {chat.otherUser.unreadedMessages}
                  </div>
                </div>
                <div className="flex flex-col ml-4 max-w-[80%] leading-tight max-smd:hidden">
                  <h1 className="text-md font-semibold line-clamp-1">{chat.otherUser.name}</h1>
                  <span className="text-gray-500 line-clamp-1 text-md">{chat.chatHistory[0].content}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xsm smd:text-sm text-gray-500 text-nowrap max-xsm:hidden">{chat?.chatHistory[0]?.timestamp.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</span>
                <div className={`flex size-4 smd:size-5 rounded-full bg-red-500 text-white items-center justify-center text-xsm smd:text-sm max-xsm:hidden ${chat.otherUser.unreadedMessages === 0 ? 'invisible' : ''}`}>
                  {chat.otherUser.unreadedMessages}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No users found</div>
        )}
      </div>
    </div>
  );
};

export default MessageList;