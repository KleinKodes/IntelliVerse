import cohere from 'cohere-ai'
import { classifyResponse, cohereResponse } from 'cohere-ai/dist/models';
let apiKey = "eECdZb5nD7QbiEdyTIFxI1fefn56IB7E2Fz8ItHH"
cohere.init(apiKey);


async function parse(file){
    
}

export async function reqSentiment(input:string): Promise<cohereResponse<classifyResponse>>{
    const response = await cohere.classify({
        inputs: [input],
        examples: [{"text": "love this movie", "label": "positive review"}, {"text": "I would watch this movie again with my friends", "label": "positive review"}, {"text": "I would watch this movie again", "label": "positive review"}, {"text": "i liked this movie", "label": "positive review"}, {"text": "this is my favourite movie", "label": "positive review"}, {"text": "worst movie of all time", "label": "negative review"}, {"text": "I would not recommend this movie to my friends", "label": "negative review"}, {"text": "I did not want to finish the movie", "label": "negative review"}, {"text": "hate this movie", "label": "negative review"}, {"text": "we made it only a quarter way through before we stopped", "label": "negative review"}, {"text": "this movie was okay", "label": "neutral review"}, {"text": "this movie was neither amazing or terrible", "label": "neutral review"}, {"text": "I would not watch this movie again but it was not a waste of time", "label": "neutral review"}, {"text": "this movie lacked any originality or depth", "label": "neutral review"}, {"text": "this movie was nothing special", "label": "neutral review"}]
      });
      return response
}