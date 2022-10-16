import cohere from 'cohere-ai'
import csvToJson from 'convert-csv-to-json';
import { classifyRequest, classifyResponse, cohereResponse } from 'cohere-ai/dist/models';

let apiKey = "eECdZb5nD7QbiEdyTIFxI1fefn56IB7E2Fz8ItHH"
cohere.init(apiKey);


function parse(fileURLToPath:string):{ text: string; label: string; }[] | { text: string; label: string; }[]{
    const val = csvToJson.fieldDelimiter('\\').getJsonFromCsv(fileURLToPath);
    //console.log(JSON.stringify(val))
    return val
 
}

export async function reqSentiment(input:string): Promise<cohereResponse<classifyResponse>>{
    const examples = parse("data.csv")
   
    console.log(JSON.stringify(examples[0]))
    console.log('=====================================')
    const response = await cohere.classify({
        inputs: [input],
        examples: examples
      });
      console.log(JSON.stringify(response))
      return response
}

reqSentiment("this movie was great")


