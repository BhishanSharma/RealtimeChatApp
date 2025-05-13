# RealtimeChatApp - **JS Backend**

**RealtimeChatApp** is a real-time messaging platform built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It allows users to engage in instant conversations with features like **one-on-one** chat rooms and **real-time** message updates. **Redis** is used for faster data access to minimize latency.

---

## 🚀 Features

* **Real-Time Communication**: Instant messaging powered by **Socket.IO** for seamless user interaction.
* **User Authentication**: Secure login and registration system using **JWT** with support for **email**, **username**, and **Google OAuth**.
* **Chat Rooms**: Create and join multiple chat rooms for personalized conversations.
* **Minimal Latency**: Utilizes **Redis** to avoid inefficient polling and reduce delays.

---

## 🛠️ Technologies Used

* **Backend**: Node.js, Express.js
* **Real-Time Engine**: Socket.IO
* **File Handling**: Multer, Cloudinary
* **Cache Storage**: Redis
* **Database**: MongoDB with Mongoose

---

## ⚙️ Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/BhishanSharma/RealtimeChatApp.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd RealtimeChatApp
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```
4. **Start the development server**:

   ```bash
   npm run dev
   ```
5. **Access the application**:
   Open your browser and go to `http://localhost:<PORT>`.

---

## 📁 Project Structure

```
RealtimeChatApp
├── public
│   └── temp
│       └── .gitkeep
├── src
│   ├── controllers
│   │   ├── user.controller.js
│   │   └── message.controller.js
│   ├── db
│   │   └── index.js
│   ├── middlewares
│   │   ├── verifyJWT.middleware.js
│   │   └── multer.middleware.js
│   ├── models
│   │   ├── user.model.js
│   │   └── message.model.js
│   ├── routes
│   │   ├── oauth.route.js
│   │   ├── user.route.js
│   │   └── message.route.js
│   ├── sockets
│   │   ├── io.js
│   │   └── socket.js
│   ├── utils
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── Passport.js
│   │   └── cloudinary.js
│   ├── app.js
│   ├── constant.js
│   └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

### 🔒 JWT Auth

* `POST /register`
* `POST /login`
* `POST /logout`
* `POST /change-password`
* `GET /current-user`
* `POST /refresh-token`

### 🔐 Google OAuth

* `GET /google`
* `GET /google/callback`
* `POST /logout`

### 💬 Chatting

* `POST /send`
* `GET /get-chat`

---

## 🧪 Usage

* **Register**: Sign up to start chatting.
* **Login**: Access your account using your credentials.
* **Join or Create Chat Rooms**: Enter existing rooms or create new ones to start conversations.
* **Real-Time Messaging**: Send and receive messages instantly with other users.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
