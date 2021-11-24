import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from 'preact-iso';
import NotFound from '~/pages/_404';
import TheHeader from '~/components/TheHeader';

const Home = lazy(() => import('~/pages/home'));
const About = lazy(() => import('~/pages/about'));

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <TheHeader />
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
