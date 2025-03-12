# 🚀 LeetCode User Details API Documentation

## 📌 Overview

The **LeetCode User Details API** allows users to fetch detailed information about a LeetCode profile, including:
✅ Username
✅ Global ranking
✅ Problem-solving statistics
✅ Contest performance
✅ Earned badges

Use this API to track progress, analyze performance, or integrate it into your own applications!

## Demo

Visit the URL in any browser 

```
https://leetcode-api-red.vercel.app/api/user/prakash___ydv
```
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
  "username": "prakash___ydv",
  "realName": "Prakash Kumar",
  "profilePicture": "https://assets.leetcode.com/users/avatars/avatar_1703535462.png",
  "ranking": 1154007,
  "country": "India",
  "aboutMe": "Focusing",
  "skills": [],
  "problemSolvingStats": {
    "easy": 35,
    "medium": 55,
    "hard": 7,
    "total": 194,
    "all": 97
  },
  "acceptanceRates": {
    "easy": "100.00%",
    "medium": "100.00%",
    "hard": "100.00%",
    "overall": "100.00%",
    "all": "100.00%"
  },
  "contestPerformance": {
    "rating": "N/A",
    "globalRank": "N/A",
    "totalParticipants": "N/A"
  },
  "contestBadge": {
    "name": "N/A",
    "displayName": "N/A",
    "icon": "N/A"
  },
  "badges": [
    {
      "id": "6279814",
      "name": "Annual Badge",
      "displayName": "50 Days Badge 2025",
      "icon": "https://assets.leetcode.com/static_assets/others/lg2550.png"
    },
    {
      "id": "6323473",
      "name": "Daily Coding Challenge",
      "displayName": "Feb LeetCoding Challenge",
      "icon": "/static/images/badges/dcc-2025-2.png"
    }
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

4️⃣ Copy the generated URL and replace `https://leetcode-api-red.vercel.app/api/user` in your setup.

## 🔮 Open for Contributions

🔹 Add support for fetching users' **recent submissions**.
🔹 Provide **contest history and performance graphs**.
🔹 Optimize API response time for better efficiency.
🔹 Implement **LeetCode discussions & solutions fetching**.

---

📩 **Need Help or Have Suggestions?**
Feel free to contact me at [mailtoprakashydv@gmail.com](mailto:mailtoprakashydv@gmail.com). Happy coding! 🚀

