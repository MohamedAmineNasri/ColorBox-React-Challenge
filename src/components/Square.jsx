const Square = ({ colorValue = "Empty Color Value", hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p>{colorValue ? colorValue : "No Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default Square;
