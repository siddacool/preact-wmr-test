import movies from '~/store/movies';
import Result from './Result';

const List = () => {
  const list = movies((state) => state.list);

  return (
    <ul>
      {list.map((l) => (
        <Result key={l.id} {...l} />
      ))}
    </ul>
  );
};

export default List;
