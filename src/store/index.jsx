import { useReducer } from "react";

let id = 0;

const initialState = {
  post: {
    id: id++,
    text: "",
    color: "palevioletred",
    size: "16px",
  },
  posts: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        post: {
          ...state.post,
          [action.payload.name]: action.payload.value,
        },
        error: action.payload.name === "text" ? "" : state.error,
      };

    case "add_post":
      if (state.post.text && state.post.color && state.post.size) {
        return {
          ...state,
          post: {
            id: id++,
            text: "",
            color: initialState.post.color,
            size: initialState.post.size,
          },
          posts: [...state.posts, state.post],
        };
      }
      return {
        ...state,
        error: "Merci d'ajouter du texte à votre publication.",
      };

    case "delete_post":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};

export const usePostsReducer = () => useReducer(reducer, initialState);
