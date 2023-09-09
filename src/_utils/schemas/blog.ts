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
            // validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            // validation: (Rule) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            // validation: (Rule) => Rule.required(),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
            // validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            author: 'author.name',
        },
        // prepare(selection) {
        //     const { title, publishedAt, author } = selection;
        //     return {
        //         title,
        //         subtitle: `By ${author} - ${new Date(publishedAt).toLocaleDateString()}`,
        //     };
        // },
    },
};
