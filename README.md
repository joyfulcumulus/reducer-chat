# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective of Project

Try to utilise React JS intermediate / advanced features to create a Fake Chat App. Followed [tutorial by Le Wagon](https://github.com/lewagon/react-redux-challenges/blob/master/03-Redux-Advanced/01-Redux-Chat/README.md).

I did not use Redux in the end because the Create React App does not come with a Redux template.

Also, after analysing the actions required (i.e. Switch chatroom, add message, set username), each slice only has 1 action, which doesnt warrant usage of Redux.

## Features Used
* custom hook (useMessages) to fetch messages data from the Le Wagon API
* useRef to interact with the DOM to scroll to the latest message
* ImmerJS to manage state (which wasnt as complex as what I thought)
* context hook (ChatContext) so that all components can access the state.
