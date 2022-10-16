import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{
    findJournal(journalId:String):String
    reqSentiment(input:String):String
  }
  extend type Mutation {
    addJournal(input:String, date:String, userId:String):String
  }
  type JournalEntry {
    id:String
    userId:String
    input:String
    sentiment:String
  }
        
`