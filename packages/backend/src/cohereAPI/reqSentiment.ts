import cohere from 'cohere-ai'
import csvToJson from 'convert-csv-to-json';
import { classifyRequest, classifyResponse, cohereResponse } from 'cohere-ai/dist/models';

let apiKey = "Ucmx3VFMRXIuWQDt57MszbP4FNK3jGM26RqLUSWK"
cohere.init(apiKey);



export async function reqSentiment(input:string):Promise<cohereResponse<classifyResponse>>{

    console.log(input)
    //@ts-ignore
    const response = await cohere.classify({
        model:  'c39b514c-c179-4542-8ab8-77e7c5331a05-ft',
        inputs: [input]
      })
      console.log(`The confidence levels of the labels are ${JSON.stringify(response)}`);
    return response

}


