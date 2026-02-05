REAL-TIME-CHAT-APPLICATION

COMPANY : CODTECH IT SOLUTIONS PRIVATE LIMITED

NAME : RUDRA DHANBAHADUR GURUNG

ITERN ID : CTIS2099

DOMAIN : MERN STACK WEB DEVELOPMENT

DURATION : 6 WEEKS

MENTOR : NEELA SANTOSH

About the Project:-
Talkatopia is a full-stack real-time chat application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The project is designed to provide a seamless and interactive communication platform that supports one-to-one messaging, group chats, real-time notifications, typing indicators, and live message updates using Socket.IO. The application focuses on performance, scalability, and an intuitive user interface, making it suitable for modern web-based communication needs.

The primary objective of this project is to gain hands-on experience in full-stack web development, implement real-time communication, and understand how frontend and backend systems interact efficiently in a production-level application.

The application follows a client–server architecture:

1. Frontend: Built using React.js and Chakra UI, responsible for user interaction, UI rendering, and real-time updates.

2. Backend: Built using Node.js and Express.js, handles APIs, authentication, chat logic, and database operations.

3. Database: MongoDB Atlas is used for storing users, chats, messages, and notifications.

4. Real-Time Engine: Socket.IO enables instant message delivery, typing indicators, and real-time notifications.

Key Features

1. User Authentication & Authorization

The application includes a secure authentication system using JWT (JSON Web Tokens). Users can register with name, email, password, and profile picture, log in securely, maintain session persistence using localStorage and passwords are encrypted, and protected routes ensure that only authenticated users can access chat functionalities.

2. One-to-One Chat Functionality

Users can search for other registered users and initiate private conversations. The system ensures: Duplicate chats are avoided, Existing chats are reused, Chat history is preserved and fetched from the database

Each private chat displays: Sender and receiver names, Profile avatars, Message timestamps, Latest message preview in the chat list

3. Group Chat Management

Talkatopia supports advanced group chat features, including: Creating group chats, Adding and removing members, Renaming group chats, Admin-only controls for group management

Group admins have special privileges, while regular members can only view and participate in conversations. This feature demonstrates role-based access control.

4. Real-Time Messaging (Socket.IO)

A core highlight of the project is real-time communication using Socket.IO: Messages are delivered instantly without page refresh, Users automatically join chat rooms, Messages are broadcast only to relevant users, Socket rooms ensure scalability and performance

This implementation simulates real-world chat applications such as WhatsApp and Slack.

5. Typing Indicator

The application includes a live typing indicator, enhancing user experience. When a user starts typing: A socket event is emitted, Other users in the same chat see an animated typing indicator, The indicator stops after inactivity

This feature demonstrates efficient event-based communication and socket optimization.

6. Real-Time Notifications

If a user receives a message while viewing another chat: A notification is triggered The notification appears in the bell icon Duplicate notifications are prevented Clicking a notification opens the respective chat

This feature improves usability and ensures no messages are missed.

7. Message Display & UI Enhancements

Messages are displayed using a scrollable chat feed with: Conditional avatar rendering, Message grouping by sender, Dynamic alignment (left/right based on sender), Smooth auto-scroll behavior

Chakra UI components ensure: Responsive design, Consistent styling, Mobile-friendly layout

Tech Stack
Client: React JS

Server: Node JS, Express JS

Database: Mongo DB

## Run Locally

Start the server
Backend:
cd backend
npm install
npm start

Start the client
Frontend:
cd frontend
npm install
npm start


Output:-


<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/cd94a970-eb1e-446c-b0ad-a4f402bc7798" />
<img width="954" height="967" alt="Image" src="https://github.com/user-attachments/assets/0dc81f9b-e525-440a-b12a-c02511e94ed6" />
<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/cbab5ce0-d695-4d3b-874f-46f167d4b454" />
<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/a69b6de3-a13d-4889-a169-c1960279a7a9" />
