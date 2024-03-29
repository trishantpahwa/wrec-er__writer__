import { useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "marked-react";

export default function PreviewView(props) {
  const { id } = useParams();
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    var _images = [];
    e.preventDefault();
    Array.from(e.target.files).forEach((file) => {
      if (file.type.substring(0, 5)) _images.push(file);
    });
    setImages(_images);
  };

  const replaceCodePenTag = (md) => {
    const codePenHashRegex = new RegExp('<codepen src="(.*)" />', "gm");
    const codePenHash = md.match(codePenHashRegex);
    let hash;
    if (codePenHash && codePenHash.length) {
      codePenHash.forEach((_codePenHash) => {
        hash = _codePenHash.split('"')[1].split("/").pop();
        // Adjust iframe height using css
        md = md.replace(
          _codePenHash,
          `<iframe height="500" width="95%" scrolling="no" src="https://codepen.io/trishantpahwa/embed/` +
            hash +
            `?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/trishantpahwa/pen/">` +
            hash +
            `Solution1</a> by Trishant Pahwa (<a href="https://codepen.io/trishantpahwa">@trishantpahwa</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>`
        );
      });
    }
    return md;
  };

  return (
    <div className="preview">
      <div>
        <button
          onClick={() => {
            props.onPublish(id);
          }}
        >
          Publish
        </button>
        <input type="file" onChange={handleImages} multiple />
        <button
          onClick={() => {
            props.storeImages(id, images);
          }}
        >
          Store Images
        </button>
        <button onClick={props.backToHome}>Back to Home</button>
      </div>
      <div className="markdown-to-html">
        <Markdown>{replaceCodePenTag(props.code)}</Markdown>
      </div>
    </div>
  );
}
