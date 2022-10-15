import { gql } from 'apollo-server-express'



export default gql`
  extend type Query{
    findJournal(journalId:String):String
    reqJournalSentiment(input:String):String
  }
  extend type Mutation {
    addJournal(journalId:String):String
  }
  type JournalEntry {
    userId:String
    input:String
    sentiment:String
  }
        
`