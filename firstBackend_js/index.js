const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Rahul!');
});

app.get('/rahul', (req, res) =>{
  res.send('Rahul/Linkedin.com')
});

app.get('/login', (req, res)=>{
  res.send("<h1>Please login at app.com</h1>");
});

const gitData = {
  "login": "rahulsuthar90243-stack",
  "id": 224508191,
  "node_id": "U_kgDODWG5Hw",
  "avatar_url": "https://avatars.githubusercontent.com/u/224508191?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rahulsuthar90243-stack",
  "html_url": "https://github.com/rahulsuthar90243-stack",
  "followers_url": "https://api.github.com/users/rahulsuthar90243-stack/followers",
  "following_url": "https://api.github.com/users/rahulsuthar90243-stack/following{/other_user}",
  "gists_url": "https://api.github.com/users/rahulsuthar90243-stack/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rahulsuthar90243-stack/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rahulsuthar90243-stack/subscriptions",
  "organizations_url": "https://api.github.com/users/rahulsuthar90243-stack/orgs",
  "repos_url": "https://api.github.com/users/rahulsuthar90243-stack/repos",
  "events_url": "https://api.github.com/users/rahulsuthar90243-stack/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rahulsuthar90243-stack/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rahul Suthar",
  "company": null,
  "blog": "https://portfolio-website-xi-cyan.vercel.app/",
  "location": "Rajasthan, india",
  "email": null,
  "hireable": null,
  "bio": " Aspiring Full Stack Developer",
  "twitter_username": null,
  "public_repos": 26,
  "public_gists": 0,
  "followers": 4,
  "following": 6,
  "created_at": "2025-08-04T05:42:39Z",
  "updated_at": "2026-08-01T05:28:23Z"

}

app.get('/github', (req, res)=>{
  res.json(gitData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

