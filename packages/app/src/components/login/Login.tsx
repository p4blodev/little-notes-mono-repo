import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Message from '../message/Message';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, error } = useAuth();

  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) login({ username, password });
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div className="login-items">
        <label>
          Username
          <div>
            <input
              className="login-input"
              name="username"
              onChange={onChangeUsername}
              placeholder="Enter your user name"
              type="text"
              value={username}
            />
          </div>
        </label>
      </div>
      <div className="login-items">
        <label>
          Password
          <div>
            <input
              className="login-input"
              name="password"
              onChange={onChangePassword}
              placeholder="Enter your password"
              type="password"
              value={password}
            />
          </div>
        </label>
      </div>
      <div className="login-items">
        <button className="button-12" type="submit">
          Login
        </button>
      </div>

      {error ? (
        <Message>
          <>⚠ Invalid credentials</>
        </Message>
      ) : null}
    </form>
  );
}
