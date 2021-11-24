import styles from './style.module.css';
import { useState } from 'preact/hooks';
import counter from '~/store/counter';

export default function Home() {
  const count = counter((state) => state.count);
  const onIncrement = counter((state) => state.increment);
  const onDecrement = counter((state) => state.decrement);
  const [setCount] = useState(0);

  return (
    <>
      <section class={styles.home}>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <>
          <button style={{ width: 30 }} onClick={onDecrement}>
            -
          </button>
          <output style={{ padding: 10 }}>Count: {count}</output>
          <button style={{ width: 30 }} onClick={onIncrement}>
            +
          </button>
        </>
      </section>
    </>
  );
}
