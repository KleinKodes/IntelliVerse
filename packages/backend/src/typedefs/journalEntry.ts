import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{

  }
  extend type Mutation {

  }
  type JournalEntry {
    userId:String
    input:String
    sentiment:String
  }
        
`