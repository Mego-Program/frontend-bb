import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

//Internal Blog.
   async function getInternalBlog(fields = ['title', 'content', 'seo_tag']) {
    try {
        const items = await client.items.all({
            filter: {
                type: 'internal_blog',
            },
            fields: fields
        });

        const internalBlog = items.map(item => {
            let result = {};
            fields.forEach(field => {
                result[field] = item[field];
            });
            return result;
        });

        console.log('Internal Blog:', internalBlog);
        return internalBlog;
    } catch (error) {
        console.error('Error:', error);
    }
}
