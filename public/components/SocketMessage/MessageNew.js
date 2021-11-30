import socket from '~/store/socket';
import Message from './Message';

const MessageNew = () => {
  const data = socket((state) => state.data);

  return <Message msg={data} />;
};

export default MessageNew;
