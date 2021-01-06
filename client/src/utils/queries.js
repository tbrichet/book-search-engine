import gql from 'graphql-tag';

export const GET_USER = ggl `
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
}
;`