import PreviewView from "./Preview.view";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actions } from "../../../app/services";

export default function PreviewContainer() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  let code =
    useSelector(
      (state) =>
        !!state && !!state.editor && !!state.editor.code && state.editor.code
    ) || "";

  const onPublish = (blogID) => {
    dispatch(actions.EditorActions.publishBlog(blogID, code));
  };

  const storeImages = (blogID, images) => {
    if (images.length)
      dispatch(actions.EditorActions.storeImages(blogID, images));
  };

  const backToHome = () => {
    navigate("/list");
  };

  return (
    <div>
      <PreviewView
        code={code}
        onPublish={onPublish}
        storeImages={storeImages}
        backToHome={backToHome}
      />
    </div>
  );
}
