import { useState } from 'react';
import marked from 'marked';

export default function PreviewView(props) {
	const [ title, setTitle ] = useState('');
	const [ images, setImages ] = useState([]);

	const handleTitle = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
	};

	const handleImages = (e) => {
		var _images = [];
		e.preventDefault();
		Array.from(e.target.files).forEach((file) => {
			if (file.type.substring(0, 5)) _images.push(file);
		});
		setImages(_images);
	};

	return (
		<div className="preview">
			<div>
				<input type="text" onChange={handleTitle} />
				<button
					onClick={async () => {
						props.onCreate(title);
					}}
				>
					Create Blog
				</button>
				<button
					onClick={() => {
						props.onPublish(title);
					}}
				>
					Publish
				</button>
				<input type="file" onChange={handleImages} multiple />
				<button
					onClick={() => {
						props.storeImages(title, images);
					}}
				>
					Store Images
				</button>
			</div>
			<div className="markdown-to-html">
				<div dangerouslySetInnerHTML={{ __html: marked(props.code) }} />
			</div>
		</div>
	);
}
