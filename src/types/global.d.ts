// Main user interface
interface User {
    id: number;
    name: string;
    avatar: string;
    chatList: ChatList[];
}

// Chat list between main user and other users
interface ChatList {
    otherUser: OtherUser;
    chatHistory: Chat[];
}

// Other user's information
interface OtherUser {
    id: number;
    name: string;
    avatar: string;
    isOnline: boolean;
    unreadedMessages: number;
    product: string;
}

// Individual chat message
 interface Chat {
    senderId: number;  // Can be the main user or other user
    content: string;
    timestamp: Date;
}
