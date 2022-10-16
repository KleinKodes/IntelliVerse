import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{
    reqToxicity(input:String):String
    reqToxicityImage(input:String):String
  }
  
  type Toxicity {
    id:String
    userId:String
    input:String
    sentiment:String
  }
        
`