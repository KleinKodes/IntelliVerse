# Seven

## Inspiration

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
