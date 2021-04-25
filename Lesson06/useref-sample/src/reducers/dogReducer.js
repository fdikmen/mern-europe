export const dogReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, data: "", loading: true, error: "" };
      case "FETCH_SUCCESS":
        return { ...state, data: action.payload, loading: false };
      case "FETCH_ERROR":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };