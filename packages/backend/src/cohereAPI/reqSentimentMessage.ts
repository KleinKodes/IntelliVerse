
import cohere from 'cohere-ai'
import { classifyRequest, classifyResponse, cohereResponse } from 'cohere-ai/dist/models';

import getTextFromImage from "node-text-from-image";
import Jimp from "jimp"


let apiKey = "eECdZb5nD7QbiEdyTIFxI1fefn56IB7E2Fz8ItHH"
cohere.init(apiKey);




async function get_text():Promise<String>{
    const text = await getTextFromImage("./img.png").then(text => {
        return text
    }).catch(err => {
         return 'error'
    })
    return text
}


 async function encodePNG(pngString:String):Promise<String>{
    // Some image data uri
    
    // Base64 string
    // Convert base64 to buffer => <Buffer ff d8 ff db 00 43 00 ...
    const buffer = Buffer.from(pngString, "base64");
    Jimp.read(buffer, (err, res) => {
    if (err){
        console.log(err)
    }
    res.quality(5).write("img.jpg");
    });
    console.log('success converting')
    return get_text()
    
}


export async function reqSentimentMessage(pngString:String):Promise<cohereResponse<classifyResponse>>{
    const input = String(encodePNG(pngString))
    console.log(input)
    //cohere stuff here

    const response = await cohere.classify({
        preset:'No preset',
        model: '18271883-c870-4293-a566-1b85505fe712-ft',
        inputs: [input]
      })
      console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
      return response

}






