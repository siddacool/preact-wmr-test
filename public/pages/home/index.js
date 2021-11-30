import styles from './style.module.css';
import Counter from '~/components/MainCounter';
import SocketMessage from '~/components/SocketMessage';

export default function Home() {
  return (
    <section class={styles.home}>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Counter />
      <SocketMessage />
    </section>
  );
}
