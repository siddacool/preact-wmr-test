import PlainButton from '~/components/PlainButton';
import Output from '~/components/Output';

const Counter = ({
  count = 0,
  onIncrement = () => {},
  onDecrement = () => {},
}) => {
  return (
    <div>
      <PlainButton onClick={onDecrement}>-</PlainButton>
      <Output value={count} title="Count" />
      <PlainButton onClick={onIncrement}>+</PlainButton>
    </div>
  );
};

export default Counter;
