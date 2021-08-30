import EditorService from './editor.service';

const EditorActions = {
    selectBlog: (blogID) => {
        // const update = (code) => ({ type: 'UPDATE_CODE', code: code });

		return async (dispatch) => {
			try {
				// dispatch(update(updatedCode));
                // selectBlog()
			} catch (err) {
				console.log(err);
			}
		};
    },
	updateEditorAction: (updatedCode) => {
		const update = (code) => ({ type: 'UPDATE_CODE', code: code });

		return async (dispatch) => {
			try {
				dispatch(update(updatedCode));
			} catch (err) {
				console.log(err);
			}
		};
	},
	createBlog: (title) => {
		// const create = (title) => ({ type: 'CREATE_BLOG', title: title });
		return async (dispatch) => {
			try {
                // dispatch(create(title))
				await EditorService.createBlog(title);
			} catch (err) {
				console.log(err);
			}
		};
	},
    publishBlog: (blogID, code) => {
		// const create = (title) => ({ type: 'CREATE_BLOG', title: title });
		return async (dispatch) => {
			try {
                // dispatch(create(title))
				await EditorService.publishBlog(blogID, code);
			} catch (err) {
				console.log(err);
			}
		};
	},
	storeImages: (blogID, images) => {
		return async (dispatch) => {
			try {
                // dispatch(create(title))
				await EditorService.storeImages(blogID, images);
			} catch (err) {
				console.log(err);
			}
		};
	}
};

export default EditorActions;
