// App.js
import React, { useState } from 'react';
import { signup, signin, logout } from './Auth';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup(email, password);
  };

  const handleSignin = async () => {
    await signin(email, password);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>LeanryFi</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleSignin}>Sign In</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
