import movies from '~/store/movies';

const MovieSearch = () => {
  const fetch = movies((state) => state.fetch);

  const onSearch = (e) => {
    fetch(e.target.value);
  };

  return (
    <div>
      Search TV shows:
      <br />
      <input type="search" onSearch={onSearch} />
    </div>
  );
};

export default MovieSearch;
