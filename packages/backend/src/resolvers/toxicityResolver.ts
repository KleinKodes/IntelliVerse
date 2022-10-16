
import {reqToxicity} from '../cohereAPI'

import {reqToxicityImages} from '../cohereAPI'


async function get_toxicity(input: string): Promise<String>{
  
  const response = await reqToxicity(input)
  
  if(response.statusCode != 200){
    return 'Bad model'
  }

  const a = response.body.classifications[0].prediction
   
  return a
  
}


async function get_toxicity_png(input: string): Promise<String>{
  
    const response = await reqToxicityImages(input)
    
    if(response.statusCode != 200){
      return 'Bad model'
    }
  
    const a = response.body.classifications[0].prediction
     
    return a
    
  }

const resolvers = {
    Query: {
        reqToxicity: async(
            root,
            args:{input:string},
            context
          )=>{
            const toxicity = get_toxicity(args.input)
            return toxicity
          },
          reqToxicityImage: async(root, args:{pngString:string},context)=>{
            const toxicity = get_toxicity_png(args.pngString)
            return toxicity
          }
    }


}

export default resolvers