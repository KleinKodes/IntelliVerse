import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{
    reqMessageSentiment(pngString:String):String
  }
  type Messages {
    id:String
    userId:String
    input:String
    sentiment:String
  }
        
`