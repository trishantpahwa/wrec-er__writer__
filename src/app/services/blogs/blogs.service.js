import YAML from 'yaml';

import { S3Service } from '../aws';

const BlogsService = {
    getMetaDataList: async () => {
        const blogsList = await S3Service.listObjects('meta')
        let _blogs = await Promise.all(blogsList.map(async blog => {
            const file = await S3Service.getObject(blog);
            return YAML.parse(file.Body.toString());
        }));
        let blogs = {};
        for (var i = 0; i < blogsList.length; i++) {
            blogs[blogsList[i].split('/')[1].split('.')[0]] = _blogs[i];
        }
        return blogs;
    },
    getBlogFiles: async (blog) => {
        const filesList = await S3Service.listObjects(blog);
        const files = await Promise.all(filesList.map(async file => {
            const _file = await S3Service.getObject(file);
            // console.log(_file) // Store images seperately, would be easy to parse, hint content type => TP
            return _file.Body.toString();
        }));
        let _files = {};
        for (var i = 0; i < files.length; i++) {
            _files[filesList[i].split('/')[1]] = files[i];
        }
        return _files;
    },
    deleteBlog: async (blogID) => {
        const filesList = await S3Service.listObjects(blogID);
        await Promise.all(filesList.map(async file => {
            await S3Service.deleteObject(file);
            return true;
        }));
        await S3Service.deleteObject('meta/' + blogID + '.yaml');
    }
};

export default BlogsService;