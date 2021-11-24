import styles from './style.module.css';
import { useLocation } from 'preact-iso';
import HeaderCounter from './HeaderCounter';
import headerLinks from '~/data/header-links';

export default function TheHeader() {
  const { url } = useLocation();

  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        {headerLinks.map((hl) => (
          <a href={hl.path} key={hl.name}>
            {hl.name}
          </a>
        ))}
      </nav>
      <HeaderCounter />
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
