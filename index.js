const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to LeetCode User API!" });
});

app.get("/api/user/:username", async (req, res) => {
    const username = req.params.username;
    const url = "https://leetcode.com/graphql";

    const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          userAvatar
          ranking
          countryName
          aboutMe
          skillTags
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
          totalSubmissionNum {
            difficulty
            count
          }
        }
        contestBadge {
          name
          displayName
          icon
        }
        badges {
          id
          name
          icon
          displayName
        }
      }
      userContestRanking(username: $username) {
        rating
        globalRanking
        totalParticipants
      }
    }`;

    const variables = { username };

    try {
        const response = await axios.post(
            url,
            { query, variables },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Referer": `https://leetcode.com/${username}/`,
                    "User-Agent": "Mozilla/5.0"
                }
            }
        );

        const data = response.data;

        if ("errors" in data) {
            return res.status(400).json({ error: "Invalid username or API fields changed." });
        }

        const userData = data?.data?.matchedUser || {};
        const contestData = data?.data?.userContestRanking || {};

        if (!userData.username) {
            return res.status(404).json({ error: "User not found on LeetCode." });
        }

        const profile = userData.profile || {};
        const submissionStats = userData.submitStats || {};
        const acSubmissions = submissionStats.acSubmissionNum || [];
        const totalSubmissions = submissionStats.totalSubmissionNum || [];
        const contestBadge = userData.contestBadge || {};
        const badges = userData.badges || [];

        let problemStats = { easy: 0, medium: 0, hard: 0, total: 0 };
        let acceptanceRates = { easy: "N/A", medium: "N/A", hard: "N/A", overall: "N/A" };

        let totalAccepted = 0;
        let totalAttempts = 0;

        acSubmissions.forEach((item) => {
            problemStats[item.difficulty.toLowerCase()] = item.count;
            totalAccepted += item.count;
        });

        totalSubmissions.forEach((item) => {
            const difficulty = item.difficulty.toLowerCase();
            const totalCount = item.count;
            totalAttempts += totalCount;

            if (totalCount > 0) {
                acceptanceRates[difficulty] = ((problemStats[difficulty] / totalCount) * 100).toFixed(2) + "%";
            } else {
                acceptanceRates[difficulty] = "0%";
            }
        });

        problemStats.total = totalAccepted;
        acceptanceRates.overall = totalAttempts > 0 ? ((totalAccepted / totalAttempts) * 100).toFixed(2) + "%" : "0%";

        const formattedData = {
            username: userData.username,
            realName: profile.realName || "N/A",
            profilePicture: profile.userAvatar || "N/A",
            ranking: profile.ranking || "N/A",
            country: profile.countryName || "N/A",
            aboutMe: profile.aboutMe || "N/A",
            skills: profile.skillTags || [],
            problemSolvingStats: problemStats,
            acceptanceRates: acceptanceRates,
            contestPerformance: {
                rating: contestData.rating || "N/A",
                globalRank: contestData.globalRanking || "N/A",
                totalParticipants: contestData.totalParticipants || "N/A",
            },
            contestBadge: {
                name: contestBadge.name || "N/A",
                displayName: contestBadge.displayName || "N/A",
                icon: contestBadge.icon || "N/A"
            },
            badges: badges.map(badge => ({
                id: badge.id,
                name: badge.name,
                displayName: badge.displayName,
                icon: badge.icon
            }))
        };

        res.json(formattedData);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data. Try again later." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
