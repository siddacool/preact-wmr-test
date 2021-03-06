import 'preact/debug';
import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso';
import TheHeader from '~/components/TheHeader';
import Router from './Router';
import SocketClient from '~/components/SocketClient';

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <TheHeader />
        <Router />
      </div>
      <SocketClient />
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
