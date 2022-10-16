import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{
    reqExpressionSentiment(input:String):String
  }
  type Expression {
    id:String
    userId:String
    input:String
    sentiment:String
  }
        
`