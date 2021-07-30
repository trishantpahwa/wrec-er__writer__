const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_CODE':
			return { ...state, code: action.code };
		case 'CREATE_BLOG':
			return { ...state, title: action.title };
		default:
			return state;
	}
};
