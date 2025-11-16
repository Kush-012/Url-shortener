# URL Shortener

A simple and efficient URL Shortener built using **Node.js**, **Express.js**, and **MongoDB**.  
Users can generate shortened URLs, which automatically redirect to the original links.  
The project is lightweight, fast, and easy to deploy.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📘 About the Project

This URL Shortener allows users to input long URLs and get a shortened, unique URL in return.  
When the shortened URL is visited, it redirects to the original link.

This backend application is built with Express.js and connected to MongoDB.  
It supports JSON requests and includes a clean route structure for easy expansion.

---

##  Features

- 🔗 Shorten long URLs  
- 🔁 Redirect short URLs to original URLs  
- 🗂️ Organized routes and controllers  
- ⚡ Fast and lightweight  
- 🛢️ MongoDB-based storage  
- 🔐 Environment variable support  
- 🧩 Easy to deploy (Render, Vercel Server, Railway)

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (MongoDB Atlas recommended)  
- **Runtime:** Node.js
- **Package Manager:** npm
```
/url-shortener
│── /controllers
│── /routes
│── /models
│── /public
│── connect.js
│── server.js
│── package.json
└── .env
```

---
![Uploading image.png…]()

---
##  Installation

1️⃣ Clone the repository

```
git clone https://github.com/Kush-012/Url-shortener.git
cd Url-shortener
``` 
2️⃣ Install dependencies
npm install

3️⃣ Create .env file
touch .env

4️⃣ Add environment variables 
Create a .env file in the root directory and add:
```
mongodburl=your_mongodb_connection_string
port=3000
```


---
# Usage

- Start the server:
- npm start

Server will run at:
```
http://localhost:3000
```

**API Endpoints**
- Shorten URL

**POST /url**

Body:
```
{
  "url": "https://example.com"
}
```

Response:
```
{
  "shortid": "A1bC9dE",
}
```
**GET /url/:shortid**
```
Redirect to Original URL
```

Automatically redirects to the original full URL.
---
# Deployment

You can deploy this backend on:

- Render

- Railway

- Vercel (Serverless)

- Cyclic.sh

- Heroku (if available)

**Ensure you configure**:

- Environment variables
- MongoDB connection
- Public folder access
---
# Contributing

- Contributions are welcome!
- Fork the repo
- Create a new branch
- Commit your changes
- Push and create a Pull Request

---
# License

This project is licensed under the MIT License.

# Contact

Kush Mehta

GitHub: https://github.com/Kush-012

linkedin: www.linkedin.com/in/kushm1

Email: kushmehta124@gmailcom  

---



