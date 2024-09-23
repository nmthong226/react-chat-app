//dummy user data
export const mainUser: User = {
    id: 1,
    name: "John Doe",
    avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-1.png?alt=media&token=15ddd431-4bc2-41a7-a950-ba2cf31e9ba3",
    chatList: [
        {
            otherUser: {
                id: 2,
                name: "Alice Johnson",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-2.png?alt=media&token=777dd259-9aa6-42da-9bca-3107c8013d98",
                isOnline: true,
                unreadedMessages: 2,
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
                {
                    senderId: 1,
                    content: "I'm doing well. Did you check out the new Golden Coat?",
                    timestamp: new Date('2024-09-22T10:18:00'),
                },
                {
                    senderId: 2,
                    content: "Yes! It looks amazing. Thinking about getting one!",
                    timestamp: new Date('2024-09-22T10:20:00'),
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
                {
                    senderId: 3,
                    content: "Great, see you then!",
                    timestamp: new Date('2024-09-22T09:40:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 4,
                name: "Charlie Brown",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-4.png?alt=media&token=987dd221-5b7a-45f2-9343-47d8ef4554a1",
                isOnline: true,
                unreadedMessages: 3,
                product: "Bronze Watch",
            },
            chatHistory: [
                {
                    senderId: 1,
                    content: "Hey Charlie, are you joining the event tonight?",
                    timestamp: new Date('2024-09-22T08:00:00'),
                },
                {
                    senderId: 4,
                    content: "Definitely! Can't wait to see everyone.",
                    timestamp: new Date('2024-09-22T08:05:00'),
                },
                {
                    senderId: 1,
                    content: "Great! I'll see you there.",
                    timestamp: new Date('2024-09-22T08:10:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 5,
                name: "Diana Prince",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-5.png?alt=media&token=b117ef66-efbb-41b9-b41d-5a75c2eabb51",
                isOnline: false,
                unreadedMessages: 1,
                product: "Diamond Necklace",
            },
            chatHistory: [
                {
                    senderId: 5,
                    content: "John, do you think the Diamond Necklace is worth it?",
                    timestamp: new Date('2024-09-21T18:25:00'),
                },
                {
                    senderId: 1,
                    content: "I think it's beautiful, totally worth it if you're into jewelry!",
                    timestamp: new Date('2024-09-21T18:30:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 6,
                name: "Eve Adams",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-6.png?alt=media&token=fe129ff3-45ed-4886-9d6c-32115435739d",
                isOnline: true,
                unreadedMessages: 0,
                product: "Leather Boots",
            },
            chatHistory: [
                {
                    senderId: 1,
                    content: "Eve, I saw the Leather Boots you're interested in. They look awesome!",
                    timestamp: new Date('2024-09-20T11:00:00'),
                },
                {
                    senderId: 6,
                    content: "Thanks! I'm thinking of getting them. What do you think?",
                    timestamp: new Date('2024-09-20T11:05:00'),
                },
                {
                    senderId: 1,
                    content: "Go for it! They’ll be perfect for the fall season.",
                    timestamp: new Date('2024-09-20T11:10:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 7,
                name: "Franklin Wright",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-7.png?alt=media&token=123dd221-5678-123f-1234-123456789abc",
                isOnline: true,
                unreadedMessages: 4,
                product: "Sunglasses",
            },
            chatHistory: [
                {
                    senderId: 7,
                    content: "John, did you see the new Sunglasses collection?",
                    timestamp: new Date('2024-09-20T15:45:00'),
                },
                {
                    senderId: 1,
                    content: "Yeah, they look awesome! Planning to get a pair?",
                    timestamp: new Date('2024-09-20T15:50:00'),
                },
                {
                    senderId: 7,
                    content: "Definitely, I'm leaning towards the Aviators.",
                    timestamp: new Date('2024-09-20T15:55:00'),
                },
                {
                    senderId: 1,
                    content: "Good choice, they suit your style!",
                    timestamp: new Date('2024-09-20T16:00:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 8,
                name: "Grace Lee",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-8.png?alt=media&token=567dd221-5b7a-1111-2222-111111223344",
                isOnline: false,
                unreadedMessages: 1,
                product: "Handbag",
            },
            chatHistory: [
                {
                    senderId: 8,
                    content: "John, I need your advice on the new Handbag collection.",
                    timestamp: new Date('2024-09-19T19:10:00'),
                },
                {
                    senderId: 1,
                    content: "Sure, what's your favorite so far?",
                    timestamp: new Date('2024-09-19T19:15:00'),
                },
                {
                    senderId: 8,
                    content: "I’m torn between the Black Leather and the Tan Suede.",
                    timestamp: new Date('2024-09-19T19:20:00'),
                },
            ],
        },
        {
            otherUser: {
                id: 9,
                name: "Henry Williams",
                avatar: "https://firebasestorage.googleapis.com/v0/b/yolo-web-app.appspot.com/o/react-chat-app%2Fuser-9.png?alt=media&token=11122233-9a9d-777f-6666-555555544332",
                isOnline: true,
                unreadedMessages: 0,
                product: "Wristwatch",
            },
            chatHistory: [
                {
                    senderId: 1,
                    content: "Henry, how's the new Wristwatch collection looking?",
                    timestamp: new Date('2024-09-18T12:00:00'),
                },
                {
                    senderId: 9,
                    content: "It's fantastic! You should check it out, might get one myself.",
                    timestamp: new Date('2024-09-18T12:05:00'),
                },
                {
                    senderId: 1,
                    content: "Let me know which one you go for, sounds exciting!",
                    timestamp: new Date('2024-09-18T12:10:00'),
                },
            ],
        },
    ],
};
