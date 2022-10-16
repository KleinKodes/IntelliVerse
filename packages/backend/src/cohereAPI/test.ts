import fs from 'fs'

import {reqSentimentMessage} from './reqSentimentMessage'
import { classifyRequest, classifyResponse, cohereResponse } from 'cohere-ai/dist/models';

 function get_png_string():String{


    // writing to a sub-directory
    // after creating a directory called 'photos'
    var imageAsBase64 = fs.readFileSync('./img.png', 'base64');

    //fs.writeFileSync('./img.txt',imageAsBase64)
    return imageAsBase64
}


async function get_sentiment(pngString: String): Promise<String>{
  
    const response = await reqSentimentMessage(pngString)
    
    if(response.statusCode != 200){
      return 'Bad model'
    }
  
    const a = response.body.classifications[0].prediction
    console.log(a)
    return a
  }


const x = String(get_png_string())

console.log(get_sentiment(x))
process.exit()