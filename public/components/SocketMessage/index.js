import MessageNew from './MessageNew';
import MessageOld from './MessageOld';

const SocketMessage = () => {
  return (
    <div>
      <br />
      Socket Message:
      <div>
        <MessageNew />
        <MessageOld />
      </div>
    </div>
  );
};

export default SocketMessage;
