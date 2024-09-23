# Frontend Chat Web Application

## 1. Objective
The objective of this project is to develop a frontend chat web application that allows users to communicate in real-time. The application meets the requirements outlined by Nexlab Technology Co., Ltd for the frontend test.

## 2. Technologies Used
- **Framework:** React 16+
- **Build Tool:** Vite
- **Language:** TypeScript
- **State Management:** React Hooks
- **Styling:** Tailwind CSS
- **Icons:** FontAwesome

## 3. Requirements

### 3.1 Functional Requirements
- Users can send messages in real-time.
- Messages are cached locally to maintain state during user sessions.
- A search feature allows users to filter chat lists based on usernames.

### 3.2 Non-Functional Requirements
- The application should have a responsive design.
- Code must be well-organized and adhere to best practices.
- The project should be deployed and accessible online.

## 4. Implementation

### 4.1 Project Structure
The project is organized into the following directories:
```bash
src/ 
├── components/ # Contains reusable UI components. 
├── pages/ # Contains main application pages (e.g., Login, Chat). 
├── assets/ # Contains static assets like images and constants. 
├── hooks/ # Contains custom hooks for state management. 
└── App.tsx # The main application file.
```

### 4.2 Core Features

#### 4.2.1 Chat Functionality
- **Sending Messages:** Users can type messages and send them. Each message is timestamped and displayed in the chat history.
- **Message Caching:** Messages are saved in local storage to maintain state across page reloads.

#### 4.2.2 User Authentication
- A simple login system with hardcoded credentials.
- User data is stored in local storage to manage session states.

#### 4.2.3 Search Functionality
- Users can search for chats using a search bar that filters chat lists dynamically.

### 4.3 UI Design
The application follows a clean and modern design, utilizing Tailwind CSS for styling and FontAwesome for icons. Components are structured for easy readability and maintainability.

## 5. Deployment
The application is deployed on [Your Deployment Platform, e.g., Vercel, Netlify]. Users can access it at [Your App URL].

## 6. Getting Started
To run this project locally, follow these steps:

### 1. Clone the repository:
```bash
   git clone [This GitHub Repo URL]
```
### 2. Install dependencies:
```bash
npm install
```
### 3. Start the development server:
```bash
npm run dev
```
### 4. Open your browser and navigate to http://localhost:3000.


## 7. Acknowledgments
Thank you to Nexlab Technology Co., Ltd for providing the opportunity to work on this project.
