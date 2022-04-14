import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../app/services';
import BlogEditorView from './BlogEditor.view';

function BlogEditorContainer(props) {

    const dispatch = useDispatch();
    const { id } = useParams();
    const code = useSelector((state) => !!state && state?.blogs?.data) || '';

    useEffect(() => {
        dispatch((actions.BlogsActions.getBlog(id)));
    }, []);

    return (
        <div>
            <BlogEditorView code={code['data.md'] ? code['data.md'] : ''} />
        </div>
    )
}

export default BlogEditorContainer;