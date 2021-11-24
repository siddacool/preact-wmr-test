import counter from '~/store/counter';
import Counter from '~/components/Counter';

export default function MainCounter() {
  const count = counter((state) => state.count);
  const onIncrement = counter((state) => state.increment);
  const onDecrement = counter((state) => state.decrement);

  return (
    <Counter
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
}
