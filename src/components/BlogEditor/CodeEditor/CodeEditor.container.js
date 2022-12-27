import React, { useEffect, useState } from 'react';
import CodeEditorView from './CodeEditor.view';
import { useDispatch } from 'react-redux';

import { actions } from '../../../app/services';

function CodeEditorContainer(props) {
	const dispatch = useDispatch();
	const [ code, setCode ] = useState(props.code);

	function onChange(newValue, e) {
		setCode((_code) => {
			dispatch(actions.EditorActions.updateEditorAction(newValue));
			return newValue;
		});
	}

	useEffect(() => {
		setCode((_code) => props.code);
		dispatch(actions.EditorActions.updateEditorAction(props.code));
	}, [dispatch, props.code]);

	return (
		<div>
			<CodeEditorView onChange={onChange} code={code} />
		</div>
	);
}

export default CodeEditorContainer;
