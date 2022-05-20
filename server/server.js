const express = require("express");
const app = express();
const fetch = require("node-fetch");
const querystring = require("querystring");
const cors = require("cors");
const { Agent } = require("http");
const PORT = process.env.PORT || 8000;
require("dotenv").config();

app.use(cors({ origin: true }));

const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

app.use(express.urlencoded({ extended: true })); // for form data

app.get("/", (req, res) => {
  res.redirect("https://www.theonlycolors.com");
});

// Initial GET request redirects visitor to Spotify authorization endpoint
app.get("/authorize", (req, res) => {
  let endpoint = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-read user-top-read user-read-private playlist-read-private&show_dialog=true`;

  res.redirect(endpoint);
});

// After authorization complete, Spotify redirects user back to /callback with
app.get("/callback", async (req, res) => {
  let body = {
    grant_type: "authorization_code",
    code: req.query.code,
    redirect_uri: process.env.REDIRECT_URI,
  };

  const encodedData = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
    "utf8"
  ).toString("base64");

  await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + encodedData,
      Accept: "application/json",
      "User-Agent": "User-Agent: Mozilla/5.0",
    },
    body: encodeFormData(body),
  })
    .then((res) => res.json())
    .then((data) => {
      var str = [];
      for (var param in data)
        if (data.hasOwnProperty(param)) {
          str.push(
            encodeURIComponent(param) + "=" + encodeURIComponent(data[param])
          );
        }
      let paramString = str.join("&");
      res.redirect(`http://localhost:3000/?${paramString}`);
    });
});

app.get("/album", async (req, res) => {
  const id = "7G2PY8yve3Db0PeGsosb4x";
  await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      Authorization: "Bearer ",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

app.get("/me", async (req, res) => {
  const accessToken = req.query.access_token;

  await fetch(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
      "User-Agent": "User-Agent: Mozilla/5.0",
    },
  })
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get("/play", async (req, res) => {
  fetch("https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer " +
        "BQAt8qUqlWnCZ2-c2mGsJpe8RFERHT3bqtv2VcH3ng_l0GGw9xDrOvrOzTqmXTTD7xLuIroj8WbqzoAgj7thtCQDjRUBO8FK8hPpUyuNqTw7yLJvYsmP-FqewQEw5qUjhiz1roXoZAqwe03ICtU08ALZ6pjuff7pYfSzNlqiHX6QSqzQ9LpkusGizptXK4x5j_oD7VpvEm8&token_type=Bearer&expires_in=3600&refresh_token=AQDlMx44AEQ_0tyfMEmSdbhOEGwXdNQ2VNoWdh8Hm57zPuf5PyNf85cNDowMwFg9q4CVq3-94xJ-YGfjkYdrlTMdvihRprB1bP0xLmuA5l95yVfOELNJSigLcuM5uT8Q7F0&scope=playlist-read-private%20user-modify-playback-state%20user-follow-read%20user-read-playback-state%20user-read-currently-playing%20user-top-read%20user-read-private",
      "Content-Type": "application/json",
    },
    body: { context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr" },
  })
    .then((res) => res.json())
    .then((data) => res.send(data));
});
app.listen(8000, function () {});
