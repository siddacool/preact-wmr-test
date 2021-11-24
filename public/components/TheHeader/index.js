import { useLocation } from 'preact-iso';
import styles from './style.module.css';

export default function TheHeader() {
  const { url } = useLocation();

  console.log(url);

  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/error">Error</a>
      </nav>
      <label>
        URL:
        <input
          readonly
          value={url}
          ref={(c) => c && (c.size = c.value.length)}
        />
      </label>
    </header>
  );
}
