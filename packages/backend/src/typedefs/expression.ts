import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{

  }
  extend type Mutation {

  }
  type Expression {
    userId:String
    input:String
    sentiment:String
  }
        
`