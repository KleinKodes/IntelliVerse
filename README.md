# IntelliVerse

## Inspiration
Everyone can relate to the scene of staring at messages on your phone and wondering, "Was what I said toxic?", or "Did I seem offensive?". While we originally intended to create an app to help neurodivergent people better understand both others and themselves, we quickly realized that emotional intelligence support is a universally applicable concept. 

After some research, we learned that neurodivergent individuals find it most helpful to have plain positive/negative annotations on sentences in a conversation. We also think this format leaves the most room for all users to reflect and interpret based on the context and their experiences. This way, we hope that our app provides both guidance and gentle mentorship for developing the users' social skills. Playing around with Co:here's sentiment classification demo, we immediately saw that it was the perfect tool for implementing our vision. 

## What it does
IntelliVerse offers insight into the emotions of whomever you're texting. Users can enter their conversations either manually or by taking a screenshot. Our app automatically extracts the text from the image, allowing fast and easy access. Then, IntelliVerse presents the type of connotation that the messages convey. Currently, it shows either a positive, negative or neutral connotation to the messages. The interface is organized similarly to a texting app, ensuring that the user effortlessly understands the sentiment.  

## How we built it
We used a microservice architecture to implement this idea
The technology stack includes React Native, while users' information is stored with MongoDB and queried using GraphQL. Apollo-server and Apollo-client are used to connect both the frontend and the backend. 
The sentiment estimates are powered by custom Co:here's finetunes, trained using a public chatbot dataset found on Kaggle.
Text extraction from images is done using npm's text-from-image package.

## Challenges we ran into
We were unfamiliar with many of the APIs and dependencies that we used, and it took a long to time to understand how to get the different components to come together. 
When working with images in the backend, we had to do a lot of parsing to convert between image files and strings.
When training the sentiment model, finding a good dataset to represent everyday conversations was difficult. We tried numerous options and eventually settled with a chatbot dataset. 

## Accomplishments that we're proud of
We are very proud that we managed to build all the features that we wanted within the 36-hour time frame, given that many of the technologies that we used were completely new to us. 

## What we learned
We learned a lot about working with React Native and how to connect it to a MongoDB backend. When assembling everyone's components together, we solved many problems regarding dependency conflicts and converting between data types/structures. 

## What's next for IntelliVerse
In the short term, we would like to expand our app's accessibility by adding more interactable interfaces, such as audio inputs. We also believe that the technology of IntelliVerse has far-reaching possibilities in mental health by helping introspect upon their thoughts or supporting clinical diagnoses. 
