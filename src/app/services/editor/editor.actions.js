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
		const create = (title, data) => ({ type: 'CREATE_BLOG', title: title, data: data });
		return async (dispatch) => {
			try {
				const data = await EditorService.createBlog(title);
				const blogID = data.Key.split('meta')[1].split('/')[0];
                dispatch(create(title, blogID))
			} catch (err) {
				console.log(err);
			}
		};
	},
    publishBlog: (blogID, code) => {
		const create = (title, data) => ({ type: 'CREATE_BLOG', title: title, data: data });
		return async (dispatch) => {
			try {
				const data = await EditorService.publishBlog(blogID, code);
				console.log(data);
                dispatch(create(blogID, data))
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