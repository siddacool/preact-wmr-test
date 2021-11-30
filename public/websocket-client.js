import env from './env';

const websocketClient = (onMessage = () => {}) => {
  console.log('access');
  let url = env.onlineWebsocketLink;
  let client = new WebSocket(url);

  client.addEventListener('open', () => {
    console.log(`[websockets] Connected to ${url}`);
  });

  client.addEventListener('close', () => {
    console.log(`[websockets] Disconnected from ${url}`);
    client = null;
  });

  client.addEventListener('message', function (event) {
    // @ts-ignore
    onMessage(JSON.parse(event.data), event);
  });
};

export default websocketClient;
