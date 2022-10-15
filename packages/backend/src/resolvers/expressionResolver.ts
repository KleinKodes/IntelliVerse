
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
            input: string
          )=>{
            const sentiment = get_sentiment(input)
            return sentiment
          }
    }


}

export default resolvers