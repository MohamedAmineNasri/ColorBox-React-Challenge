import colorNames from "colornames";
const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="ColorName">Add Color Name</label>
      <input
        type="text"
        autoFocus
        id="ColorName"
        placeholder="Add Color Name"
        className=""
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>Toogle Text Color</button>
    </form>
  );
};

export default Input;
