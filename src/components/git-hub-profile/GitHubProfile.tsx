import React, { useState, useEffect } from "react";
import User from "./User";
import "./index.scss"

interface GitHubUser {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string | null;
  login: string;
  created_at: string;
}

const GithubProfileFinder: React.FC = () => {
  const [userName, setUserName] = useState<string>("danutzz8");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchGithubUserData() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
      setLoading(false);
    }
  }

  function handleSubmit() {
    if (userName.trim() === "") {
      alert("Please enter a username.");
      return;
    }
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;