import socket from '~/store/socket';
import Message from './Message';

const MessageOld = () => {
  const oldData = socket((state) => state.oldData);

  return <Message msg={oldData} />;
};

export default MessageOld;
