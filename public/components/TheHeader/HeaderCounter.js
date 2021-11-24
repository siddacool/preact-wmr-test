import styles from './style.module.css';
import Output from '~/components/Output';
import counter from '~/store/counter';

const HeaderCounter = () => {
  const count = counter((state) => state.count);
  return (
    <div class={styles.HeaderCounter}>
      <Output value={count} title="Count" />
    </div>
  );
};

export default HeaderCounter;
