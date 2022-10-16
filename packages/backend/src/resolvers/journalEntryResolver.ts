
import { JournalEntryDocument } from '../type'
import { JournalEntry } from '../models'

const resolvers = {
    Query: {
        findJournal: async(root, args:{journalId:String}, context):Promise<String> => {
            let x;
            await JournalEntry.findById(args).then(()=>{x= 'Success'}).catch(()=>{x= 'Failure'})

            return x

        },
        reqJournalSentiment: async(input:String):Promise<String> =>{
            return 'a'
        }
    },

    Mutation: {
        addJournal: async(root, args: {input:String, date:String, userId:String}, context):Promise<String> =>{
            let x;
            await JournalEntry.create(args).then(()=>{x= 'Success'}).catch(()=>{x= 'Failure'})
            return x
        }

    }
}

export default resolvers


