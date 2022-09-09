//schema for users creating comments

export default {
    name: 'postedBy',
    title: 'Posted By',
    type: 'reference', // will refer to other documents
    to: [{type: 'user'}]
}