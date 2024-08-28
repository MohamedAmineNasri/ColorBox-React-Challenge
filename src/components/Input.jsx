const Input = ({ colorValue, setColorValue }) => {
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
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
