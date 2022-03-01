import { useState } from 'react';
import marked from 'marked';
import Codepen from "react-codepen-embed";

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

	const replaceCodePenTag = (md) => {
		const codePenHashRegex = new RegExp("<codepen src=\"(.*)\"\ />", 'gm');
		const codePenHash = md.match(codePenHashRegex);
		let hash;
		if(codePenHash && codePenHash.length) {
			codePenHash.forEach((_codePenHash) => {
				hash = _codePenHash.split('"')[1].split('/').pop();
                                // Adjust iframe height using css
				md = md.replace(_codePenHash, `<iframe height="500" width="95%" scrolling="no" src="https://codepen.io/trishantpahwa/embed/` + hash + `?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/trishantpahwa/pen/">` + hash + `Solution1</a> by Trishant Pahwa (<a href="https://codepen.io/trishantpahwa">@trishantpahwa</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>`);
			})
		}
		return md;
	}

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
				<div dangerouslySetInnerHTML={{ __html: marked(replaceCodePenTag(props.code)) }} />
			</div>
		</div>
	);
}
