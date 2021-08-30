import CodeEditor from './CodeEditor';
import Preview from './Preview';

function BlogEditorView(props) {
	return (
		<div className="BlogView">
			<CodeEditor />
			<Preview />
		</div>
	);
}

export default BlogEditorView;
