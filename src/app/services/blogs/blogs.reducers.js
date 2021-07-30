const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_BLOGS_METADATA_REQUEST':
			return { ...state };
		case 'GET_ALL_BLOGS_METADATA_SUCCESS':
			return { ...state, metaData: action.metaData };
		case 'GET_ALL_BLOGS_METADATA_FAILED':
			return { ...state };
		default:
			return state;
	}
};
