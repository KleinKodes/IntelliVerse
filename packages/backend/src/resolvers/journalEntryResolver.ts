
import { JournalEntryDocument } from '../type'
import { JournalEntry } from '../models'
import {reqSentiment, reqSentimentMessage} from '../cohereAPI'


async function get_sentiment(input: string): Promise<String>{
  
    const response = await reqSentiment(input)
    
    if(response.statusCode != 200){
      return 'Bad model'
    }
  
    const a = response.body.classifications[0].prediction
    console.log(a)
    return a
  }
  


const resolvers = {
    Query: {
        findJournal: async(root, args:{journalId:String}, context):Promise<String> => {
            let x;
            await JournalEntry.findById(args).then(()=>{x= 'Success'}).catch(()=>{x= 'Failure'})

            return x

        },
        reqSentiment: async(root, args:{input:string}, context):Promise<String> =>{
            return await get_sentiment(args.input)
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


