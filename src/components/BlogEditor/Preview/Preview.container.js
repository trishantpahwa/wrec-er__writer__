import React, { useEffect, useState } from 'react';
import PreviewView from './Preview.view';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../../app/services';

export default function PreviewContainer() {
	const dispatch = useDispatch();
	let code =
		useSelector((state) => !!state && !!state.editor && !!state.editor.code && state.editor.code) || '';

	const onPublish = (blogID) => {
		dispatch(actions.EditorActions.publishBlog(blogID, code));
	};
	
	const onCreate = (title) => {
		dispatch(actions.EditorActions.createBlog(title));
	}

	const storeImages = (blogID, images) => {
		if(images.length) dispatch(actions.EditorActions.storeImages(blogID, images));
	}
	return (
		<div>
			<PreviewView code={code} onPublish={onPublish} onCreate={onCreate} storeImages={storeImages} />
		</div>
	);
}
