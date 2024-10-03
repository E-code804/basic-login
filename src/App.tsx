import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import LetterSlider from "./LetterSlider";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  const randPassGen = (event: React.FormEvent) => {
    event.preventDefault();
    setPassword(Math.floor(100000 + Math.random() * 900000).toString());
  };

  return (
    <div className="App background-container background-overlay">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <LetterSlider setName={setName} />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={randPassGen}>Generate Password</button>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">
            Submit HERE!!!
          </a>
          <button type="submit">S</button>
        </form>
      )}
    </div>
  );
};

export default App;
