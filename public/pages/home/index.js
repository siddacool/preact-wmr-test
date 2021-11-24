import styles from './style.module.css';
import Counter from '~/components/MainCounter';

export default function Home() {
  return (
    <section class={styles.home}>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Counter />
    </section>
  );
}
