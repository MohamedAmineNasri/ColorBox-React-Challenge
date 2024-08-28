const Square = ({ colorValue = 'Empty Color Value' }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      {colorValue ? colorValue : 'No Value'}
    </section>
  );
};


export default Square;
