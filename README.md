# IntelliVerse

## Inspiration
Everyone can relate to the scene of staring at messages on your phone and wondering, "why did they say this?" While we originally intended to create an app to help neurodivergent people better understand both others and themselves, we quickly realized that emotional intelligence support is a universally applicable concept. 

After some research, we learned that neurodivergent individuals find it most helpful to have plain positive/negative annotations on sentences in a conversation. We also think this format leaves the most room for all users to reflect and interpret based on the context and their experiences. This way, we hope that our app provides not only guidance, but also gentle mentorship for developing the users' social skills. Playing around with Cohere.ai's sentiment classification demo, we immediately saw that it was the perfect tool for implementing our vision. 

## What it does
IntelliVerse offers insight into the emotions of whomever you're texting. Users can enter their conversations either manually or by taking a screenshot. Our app automatically extracts the text from the image, allowing fast and easy access. Then, IntelliVerse presents what it thinks each message conveys about how the other person is feeling. The interface is organized similarly to a texting app, ensuring that the user effortlessly understands the vibe.  

## How we built it
The mobile app is built using React Native, while users' information is stored with MongoDB and queried using GraphQL. 
The sentiment estimates are powered by custom Cohere.ai finetunes, trained using a public chatbot dataset found on Kaggle.
Text extraction from images is done using npm's text-from-image package.

## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

## What's next for IntelliVerse
In the short term, we would like to expand our app's accessibility by adding more interactable interfaces, such as audio inputs. We also believe that the technology of IntelliVerse has far-reaching possibilities in mental health by helping introspect upon their thoughts or supporting clinical diagnoses. 
