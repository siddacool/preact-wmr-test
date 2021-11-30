import { useEffect } from 'preact/hooks';
import socket from '~/store/socket';
import websocketClient from '~/websocket-client';

const SocketClient = () => {
  const update = socket((state) => state.update);
  const onMessage = (data) => {
    console.log('Message from server ', data);
    update(data);
  };

  useEffect(() => {
    websocketClient(onMessage);
    return () => {
      // Optional: Any cleanup code
    };
  }, []);

  return <div></div>;
};

export default SocketClient;
