# RealtimeChatApp - **JS BACKEND**
RealtimeChatApp is a real-time messaging platform built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It allows users to engage in instant conversations with features like **one on one** chat rooms, and **real-time** message updates. **Redis** for faster data access to get minimal latency.

---

## Features
- **Real-Time Communication**: Instant messaging powered by **Socket.IO** for seamless user interaction.
- **User Authentication**: Secure login and registration system to manage user access by (**email** / **username**)[**JWT**] / **goggle auth**.
- **Chat Rooms**: Create and join multiple chats for convertaons can customise the xhat experience.
- **Minimal Latency**: No long never ending loops every time use the **Redis** to deal with the problem.

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Real-Time Engine**: Socket.IO
- **Files handling**: Multer, cloudinary
- **Cache Storage**: Redis
- **Database**: MongoDB with Mongoose

---

## Setup
1. **Clone the repository**:
   ```powershell
   git clone https://github.com/BhishanSharma/RealtimeChatApp.git
   ```
2. **Navigate to the project directory**:
   ```powershell
   cd RealtimeChatApp
   ```
3. **Install dependencies**:
   ```powershell
   npm install
   ```
4. **To Start the application for development**:
   ```powershell
   npm run dev
   ```
5. **Access the application**:
   Open your browser and navigate to `http://localhost:<PORT>` to use the chat application.

---

## Project Structure
|- **RealtimeChatApp**
|   |- **public**
|   |   |- **temp**
|   |   |   |- .gitkeep
|   |- **src**
|   |   |- **controllers**
|   |   |   |- user.controller.js
|   |   |   |- message.controller.js
|   |   |- **db**
|   |   |   |- index.js
|   |   |- **middlewares**
|   |   |   |- verifyJWT.middleware.js
|   |   |   |- multer.middleware.js
|   |   |- **models**
|   |   |   |- user.model.js
|   |   |   |- message.model.js
|   |   |- **routes**
|   |   |   |- outh.route.js
|   |   |   |- user.route.js
|   |   |   |- message.route.js
|   |   |- **sockets**
|   |   |   |- io.js
|   |   |   |- socket.js
|   |   |- **utils**
|   |   |   |- ApiError.js
|   |   |   |- ApiResponse.js
|   |   |   |- asyncHandler.js
|   |   |   |- Passport.js
|   |   |   |- cloudinary.js
|   |   |- app.js
|   |   |- constant.js
|   |   |- index.js
|   |- .env
|   |- .gitignore
|   |- package-lock.json
|   |- package.json
|   |- README.md

---

## Endpoints
### JWT Auth
- `/register`
- `/login`
- `/logout`
- `/change-password`
- `/current-user`
- `/refresh-token`
### google OAuth
- `/google`
- `/google/callback`
- `/logout`
### chatting
- `/send`
- `/get-chat`

---

## Usage
- **Register**: Create a new account to start chatting.
- **Login**: Access your account with your credentials.
- **Join/Create Chat Rooms**: Enter existing rooms or create new ones to start conversations.
- **Real-Time Messaging**: Send and receive messages instantly with other users in the room.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.