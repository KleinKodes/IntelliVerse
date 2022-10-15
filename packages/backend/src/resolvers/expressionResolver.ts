
import { ExpressionDocument } from '../type'
import { Expression } from '../models'
import {reqSentiment} from '../cohereAPI'


async function get_sentiment(input:String): Promise<String>{

   
    return await reqSentiment(input)
}

const resolvers = {
    Query: {
        requestExpressionSent: async(
            input: String
          )=>{
            const sentiment = get_sentiment(input)
            return sentiment
          }
    }


}

export default resolvers