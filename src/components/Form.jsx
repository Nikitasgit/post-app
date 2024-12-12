import { usePostContext } from "../context/PostContext.jsx";

const Form = () => {
  const colors = ["palevioletred", "tomato"];
  const sizes = ["15px", "16px", "17px", "18px", "19px", "20px"];

  const { handleSubmit, state, handleChange } = usePostContext();

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <textarea
        name="text"
        value={state.post.text}
        onChange={(e) => handleChange(e)}
      />
      <select
        name="color"
        value={state.post.color}
        onChange={(e) => handleChange(e)}
      >
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
      <select
        name="size"
        value={state.post.size}
        onChange={(e) => handleChange(e)}
      >
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
      <button role="button">Publier</button>
      {state.error !== "" && <span>{state.error}</span>}
    </form>
  );
};

export default Form;
