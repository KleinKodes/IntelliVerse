
import { ExpressionDocument } from '../type'
import { Expression } from '../models'
import {reqSentiment} from '../cohereAPI'


async function get_sentiment(input: string): Promise<String>{
  
  const response = await reqSentiment(input)
  
  if(response.statusCode != 200){
    return 'Bad model'
  }

  const a = response.body.classifications[0].prediction
   
  return a
}

const resolvers = {
    Query: {
        requestExpressionSent: async(
            root,
            args:{input:string},
            context
          )=>{
            const sentiment = get_sentiment(args.input)
            return sentiment
          }
    }


}

export default resolvers