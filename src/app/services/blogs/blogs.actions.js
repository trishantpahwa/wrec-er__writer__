import BlogsService from './blogs.service';

const BlogsActions = {
    getAllBlogsAction: () => {
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
}

export default BlogsActions;