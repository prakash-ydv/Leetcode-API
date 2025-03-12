# 🚀 LeetCode User Details API Documentation

## 📌 Overview

The **LeetCode User Details API** allows users to fetch detailed information about a LeetCode profile, including:
✅ Username
✅ Global ranking
✅ Problem-solving statistics
✅ Contest performance
✅ Earned badges

Use this API to track progress, analyze performance, or integrate it into your own applications!

## 🌍 Base URL

```
https://leetcode-api-red.vercel.app/api/user
```

## 📡 Endpoints

### 1️⃣ Get User Details

#### **📌 Endpoint:**

```
GET /user/{username}
```

#### **📌 Description:**
Retrieves detailed statistics of a specific LeetCode user.

#### **📌 Request Parameters:**

| Parameter  | Type   | Required | Description                                  |
| ---------- | ------ | -------- | -------------------------------------------- |
| `username` | String | ✅ Yes   | The LeetCode username to fetch details for. |

#### **📌 Example Request:**

```
GET /user/johndoe
```

#### **📌 Example Response:**

```json
{
    "username": "johndoe",
    "ranking": 12345,
    "totalProblemsSolved": 350,
    "totalProblems": 2500,
    "acceptanceRate": "14.00%",
    "easySolved": 150,
    "mediumSolved": 120,
    "hardSolved": 80,
    "contestRating": 1800,
    "globalRanking": 5000,
    "badges": [
        "Knight",
        "Coding Enthusiast"
    ]
}
```

### ❌ Error Handling

If the request fails (e.g., invalid username, user not found, or API error), you will receive a structured error response:

#### **📌 Example Error Response:**

```json
{
    "error": "User not found"
}
```

## 🚀 How to Use

1️⃣ Send a **GET request** to `/user/{username}`.
2️⃣ Parse the JSON response to extract user details.
3️⃣ Use the data in your application, dashboard, or analysis tool.

## 🛠️ Deployment Guide (Vercel)

Want to deploy your own instance of this API? Follow these steps:

1️⃣ Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2️⃣ Login to Vercel:
   ```sh
   vercel login
   ```
3️⃣ Deploy your API:
   ```sh
   vercel
   ```
4️⃣ Copy the generated URL and replace `https://leetcode-api-red.vercel.app/api/user` in your setup.

## 🔮 Future Enhancements

🔹 Add support for fetching users' **recent submissions**.
🔹 Provide **contest history and performance graphs**.
🔹 Optimize API response time for better efficiency.
🔹 Implement **LeetCode discussions & solutions fetching**.

---

📩 **Need Help or Have Suggestions?**
Feel free to contact me at [mailtoprakashydv@gmail.com](mailto:mailtoprakashydv@gmail.com). Happy coding! 🚀

