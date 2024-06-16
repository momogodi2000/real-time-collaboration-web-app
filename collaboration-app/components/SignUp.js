import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './AuthForm.module.css';

export default function SignUp({ onSwitchToSignIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('developer');
  const { signup, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, role, email, password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
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
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={styles.select}
        >
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <br></br>
        <button onClick={onSwitchToSignIn} className={styles.button}>
          Already have an Account? Sign In
        </button>
      </form>
    </div>
  );
}
