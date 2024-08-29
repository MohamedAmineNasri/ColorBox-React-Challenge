const Square = ({ colorValue = 'Empty Color Value', hexValue }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : 'No Value'}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};


export default Square;
