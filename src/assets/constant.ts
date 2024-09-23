// Dummy data for main user
export const mainUser: User = {
    id: 1,
    name: "John Doe",
    avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-1.png?alt=media&token=15ddd431-4bc2-41a7-a950-ba2cf31e9ba3", // Example avatar URL
    chatList: [
        {
            otherUser: {
                id: 2,
                name: "Alice Johnson",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-2.png?alt=media&token=777dd259-9aa6-42da-9bca-3107c8013d98",
                isOnline: true,
                unreadedMessages: 5,
                product: "Golden Coat",
            },
            chatHistory: [
                {
                    senderId: 1,
                    content: "Hey Alice, how are you?",
                    timestamp: new Date('2024-09-22T10:15:00'),
                },
                {
                    senderId: 2,
                    content: "I'm good, thanks! How about you?",
                    timestamp: new Date('2024-09-22T10:16:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 3,
                name: "Bob Smith",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-3.png?alt=media&token=ac0edf64-b2b5-4c36-9a9d-bc330990ec31",
                isOnline: false,
                unreadedMessages: 0,
                product: "Silver Shoes",
            },
            chatHistory: [
                {
                    senderId: 3,
                    content: "Are we meeting later today?",
                    timestamp: new Date('2024-09-22T09:30:00'),
                },
                {
                    senderId: 1,
                    content: "Yes, let's meet at 2 PM.",
                    timestamp: new Date('2024-09-22T09:35:00'),
                },
            ],
        },
    ],
};