const Message = ({ msg = {} }) => {
  return (
    <div>
      {JSON.stringify(msg)} <br />
    </div>
  );
};

export default Message;
