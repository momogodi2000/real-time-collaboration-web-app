import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './AuthForm.module.css';

export default function SignIn({ onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign In</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Sign In
        </button>
        <br></br>
        <button onClick={onSwitchToSignUp} className={styles.button}>
          Need an Account? Sign Up
        </button>
      </form>
    </div>
  );
}
