import ggl from 'graphql-tag';

export const GET_ME = ggl `
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            title
            description
            image
            link
        }
    }
}`;