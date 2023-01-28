const { gql } = require('graphql-tag')
const typeDefs = gql`
    type User{
        name:String
        id:ID
        userName:String
        nationality:Nationality
        age:Int
        friends:[User]
        favoriteMovies:[Movie]
    }
    type Movie{
    id:ID!
    name:String!
    yearOfPublication:Int!
    isInTheaters:Boolean!
    }
    
    type Query {
        users:[User!]!
        user(id:ID!):User!
        movies:[Movie!]!
        movie(name:String!):Movie!
    }
    input CreateUser {
        name:String!
        userName:String!
        age:Int!
        nationality:Nationality = CHILE
        
    }
    input UpdateAuser{
        newUsername:String!
        id:ID!


    }

    type Mutation{
        addUser(input:CreateUser!):User!
        updateUser(input:UpdateAuser!):User!
    }
    
    enum Nationality{
        CHILE
        CANADA
        BRAZIL
        GERMANY
        INDIA
    
    }
    
`;


module.exports = { typeDefs }