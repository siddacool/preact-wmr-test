const Output = ({ value = 0, title = '' }) => {
  return (
    <output style={{ padding: 10 }}>
      {title}: {value}
    </output>
  );
};

export default Output;
