const initialState = {};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BLOGS_METADATA_REQUEST":
      return { ...state };
    case "GET_ALL_BLOGS_METADATA_SUCCESS":
      return { ...state, metaData: action.metaData };
    case "GET_ALL_BLOGS_METADATA_FAILED":
      return { ...state };
    case "GET_BLOG_REQUEST":
      return { ...state };
    case "GET_BLOG_SUCCESS":
      return { ...state, data: action.data };
    case "GET_BLOG_FAILED":
      return { ...state };
    case "CREATE_BLOG":
      return { ...state };
    case "DELETE_BLOG_REQUEST":
      return { ...state };
    case "DELETE_BLOG_SUCCESS":
      return { ...state };
    case "DELETE_BLOG_FAILED":
      return { ...state };
    default:
      return state;
  }
};
export default blogsReducer;
