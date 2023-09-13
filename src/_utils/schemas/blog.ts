// schemas/blogPost.js

export const blogs= {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [
                        { title: 'H1', value: 'h1'},
                        { title: 'P', value: 'p'},
                        { title: 'H2', value: 'h2'},
                        { title: 'H3', value: 'h3'},
                        { title: 'H4', value: 'h4'},
                        { title: 'UL', value: 'ul'},
                        { title: 'OL', value: 'ol'},
                        { title: 'LI', value: 'li'},
                        { title: 'A', value: 'a'},
                    ],
                }
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
        },
    },
};
