import styles from './style.module.css';

const PlainButton = ({ children = '', ...restProps }) => {
  return (
    <button class={styles.PlainButton} {...restProps}>
      {children}
    </button>
  );
};

export default PlainButton;
