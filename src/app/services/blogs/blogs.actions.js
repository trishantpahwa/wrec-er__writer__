import BlogsService from './blogs.service';

const BlogsActions = {
    getAllBlogs: () => {
        const request = () => ({ type: 'GET_ALL_BLOGS_METADATA_REQUEST' });
        const success = (metaData) => ({ type: 'GET_ALL_BLOGS_METADATA_SUCCESS', metaData });
        const failure = () => ({ type: 'GET_ALL_BLOGS_METADATA_FAILURE' });

        return async (dispatch) => {
            try {
                dispatch(request());
                const metaData = await BlogsService.getMetaDataList();
                dispatch(success(metaData));
            } catch (err) {
                console.log(err);
                dispatch(failure());
            }
        };
    },
    getBlog: (id) => {
        const request = () => ({ type: 'GET_BLOG_REQUEST' });
        const success = (data) => ({ type: 'GET_BLOG_SUCCESS', data });
        const failure = () => ({ type: 'GET_BLOG_FAILURE' });

        return async (dispatch) => {
            try {
                dispatch(request());
                const data = await BlogsService.getBlogFiles(id);
                dispatch(success(data));
            } catch (err) {
                console.log(err);
                dispatch(failure());
            }
        };
    },
    deleteBlog: (id) => {
        const request = () => ({ type: 'DELETE_BLOG_REQUEST' });
        const success = () => ({ type: 'DELETE_BLOG_SUCCESS' });
        const failure = () => ({ type: 'DELETE_BLOG_FAILURE' });

        return async (dispatch) => {
            try {
                dispatch(request());
                await BlogsService.deleteBlog(id);
                dispatch(success());
            } catch (err) {
                console.log(err);
                dispatch(failure());
            }
        };
    }
}

export default BlogsActions;