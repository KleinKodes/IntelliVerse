import {reqSentimentMessage} from '../cohereAPI'


async function get_sentiment(pngString: string): Promise<String>{
  
  const response = await reqSentimentMessage(pngString)
  
  if(response.statusCode != 200){
    return 'Bad model'
  }

  const a = response.body.classifications[0].prediction
  console.log(a)
  return a
}

const resolvers = {
    Query: {
        requestMessageSent: async(
            root,
            args:{pngString:string},
            context
          )=>{
            const sentiment = get_sentiment(args.pngString)
            return sentiment
          }
    }


}

export default resolvers