import { memo } from 'preact/compat';
import styles from './style.module.css';

const PlainButtonBase = ({ children = '', ...restProps }) => {
  return (
    <button class={styles.PlainButton} {...restProps}>
      {children}
    </button>
  );
};

const PlainButton = memo(PlainButtonBase);

export default PlainButton;
