import styles from './style.module.css';
import MovieSearch from '~/components/MovieSearch';
import MovieResults from '~/components/MovieResults';

const Movies = () => (
  <section class={styles.movies}>
    <h1>Movies</h1>
    <MovieSearch />
    <MovieResults />
  </section>
);

export default Movies;
