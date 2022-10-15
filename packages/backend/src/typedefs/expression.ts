import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{
    reqExpressionSentiment(input:String):String
  }
  extend type Mutation {

  }
  type Expression {
    userId:String
    input:String
    sentiment:String
  }
        
`