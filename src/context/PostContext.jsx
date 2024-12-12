import { createContext, useContext } from "react";
import { usePostsReducer } from "../store/index.jsx";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const context = providePost();

  return (
    <PostContext.Provider value={context}>{children}</PostContext.Provider>
  );
};

const providePost = () => {
  const [state, dispatch] = usePostsReducer();

  const handleClick = (id) => {
    dispatch({ type: "delete_post", payload: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add_post" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "set_value", payload: { name, value } });
  };

  return {
    state,
    handleClick,
    handleSubmit,
    handleChange,
  };
};

export const usePostContext = () => useContext(PostContext);
