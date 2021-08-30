import React, { useEffect, useState } from 'react';
import CodeEditorView from './CodeEditor.view';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../../app/services';

function CodeEditorContainer(props) {
	const dispatch = useDispatch();
	const [ code, setCode ] = useState('');

	function onChange(newValue, e) {
		setCode((_code) => {
			dispatch(actions.EditorActions.updateEditorAction(newValue));
			return newValue;
		});
	}

	useEffect(() => {
		dispatch(actions.EditorActions.updateEditorAction(code));
	}, []);

	return (
		<div>
			<CodeEditorView onChange={onChange} code={code} />
		</div>
	);
}

export default CodeEditorContainer;
