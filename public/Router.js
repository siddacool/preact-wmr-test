import { Router as PreactRouter, Route, lazy, ErrorBoundary } from 'preact-iso';
import NotFound from '~/pages/_404';

const Home = lazy(() => import('~/pages/home'));
const About = lazy(() => import('~/pages/about'));
const Movies = lazy(() => import('~/pages/movies'));

const Router = () => {
  return (
    <ErrorBoundary>
      <PreactRouter>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={Movies} />
        <Route default component={NotFound} />
      </PreactRouter>
    </ErrorBoundary>
  );
};

export default Router;
