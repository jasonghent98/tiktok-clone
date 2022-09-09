// schema for each video

export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string'
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'Posted By',
            type: 'postedBy'
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of: [ // likes contains a ref to a list of users
                {
                    type: 'reference',
                    to: [{type: 'user'}]
                }
            ]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{type: 'comment'}]
        }, 
        { // the category the video belongs to
            name: 'topic',
            title: 'Topic',
            type: 'string'
        }
    ]
}