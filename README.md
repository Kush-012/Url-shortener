URL Shortener 

A simple and efficient URL Shortener built using Node.js, Express, MongoDB, and NanoID.
This project allows users to shorten long URLs and redirect to the original link using a unique short ID.

Features

Generate short URLs using NanoID

Store and retrieve shortened URLs from MongoDB

Instant redirection to the original link

REST API endpoints

Clean and minimal server structure

Project Structure
url-shortener/
│── controllers/
│   └── url.js
│── models/
│   └── url.js
│── routes/
│   └── url.js
│── .gitignore
│── package.json
│── server.js


🔧 Tech Stack
Node.js
Express.js
MongoDB + Mongoose
NanoID for short ID generation

🛠️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Kush-012/Url-shortener.git
cd Url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=3000

4️⃣ Start the server
npm start


Server will run at:

http://localhost:3000

📌 API Endpoints
➤ POST /url

Creates a short URL.

Request Body:
{
  "url": "https://example.com"
}

Response:
{
  "shortid": "xYz123Ab",
}

➤ GET /:shortid

Redirects user to the original URL.

Example:

http://localhost:3000/xYz123Ab

🗂️ .gitignore (Important)

Make sure this file is present to avoid uploading unwanted folders:

node_modules/
.env

🤝 Contributing
