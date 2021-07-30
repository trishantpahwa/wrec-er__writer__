import MonacoEditor from 'react-monaco-editor';

function CodeEditorView(props) {
	return (
		<div className="editor">
			<MonacoEditor
				width="100%"
				height="100%"
				language="markdown"
				theme="vs-dark"
				defaultValue=""
				value={props.code}
				onChange={props.onChange}
				options={{ automaticLayout: true }}
			/>
		</div>
	);
}

export default CodeEditorView;
