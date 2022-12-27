import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../app/services';
import BlogListerView from './BlogLister.view';

function BlogListerContainer(props) {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const blogs = useSelector((state) => !!state.blogs && state.blogs?.metaData) || {};

    useEffect(() => {
        dispatch(actions.BlogsActions.getAllBlogs());
    }, [dispatch]);

    const onCreate = async () => {
        dispatch(actions.EditorActions.createBlog(title));
        dispatch(actions.BlogsActions.getAllBlogs());
    }

    const handleTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const onDelete = async (blogID) => {
        dispatch(actions.BlogsActions.deleteBlog(blogID));
        setTimeout(() => {
            window.location.reload();
        }, 1000);        
    }

    const logout = () => {
        window.sessionStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <div className="BlogListerContainer">
            <BlogListerView blogs={blogs} onCreate={onCreate} handleTitle={handleTitle} onDelete={onDelete} logout={logout} />
        </div>
    )
}

export default BlogListerContainer;