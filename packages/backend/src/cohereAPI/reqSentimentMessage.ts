
import cohere from 'cohere-ai'
import { classifyRequest, classifyResponse, cohereResponse } from 'cohere-ai/dist/models';

import getTextFromImage from "node-text-from-image";
import Jimp from "jimp"


let apiKey = "Ucmx3VFMRXIuWQDt57MszbP4FNK3jGM26RqLUSWK"




function parse_text(text:string){
    text = text.replace('iMessage','')
    text = text.replace(/[\r\n]/gm,' ')

    return text
}
async function get_text():Promise<string>{
    const text = await getTextFromImage("./img.png").then(text => {
        return parse_text(text)
    }).catch(err => {
         return 'error'
    })

   
    return text
}


function encodePNG(pngString:String){
    //creates png
    const buffer = Buffer.from(pngString, "base64");
    Jimp.read(buffer, (err, res) => {
    if (err){
        console.log(err)
    }
    res.quality(5).write("img.jpg");
    });
    console.log('success converting')
}


export async function reqSentimentMessage(pngString:String):Promise<cohereResponse<classifyResponse>>{
    cohere.init(apiKey);
    encodePNG(pngString)
    //cohere stuff here

    
    const input = await get_text()
    console.log(input)
    //@ts-ignore
    const response = await cohere.classify({
        model:  'c39b514c-c179-4542-8ab8-77e7c5331a05-ft',
        inputs: [input]
      })
      //console.log(`The confidence levels of the labels are ${JSON.stringify(response)}`);
    return response

}






