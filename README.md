# Reducer Chat

## Objective of Project
* Practice utilising React JS intermediate / advanced features to create a Fake Chat App.
* Followed [tutorial by Le Wagon](https://github.com/lewagon/react-redux-challenges/blob/master/03-Redux-Advanced/01-Redux-Chat/README.md).

Note: I did not use Redux in the end because:
* The Create React App does not come with a Redux template.
* After analysing the actions required (i.e. Switch chatroom, add message, set username), each slice only has 1 action, which doesnt warrant usage of Redux.

## Features Used
* Custom hook (useMessages) to fetch messages data from the Le Wagon API
* useRef to interact with the DOM to scroll to the latest message
* ImmerJS to manage state (which wasnt as complex as what I thought)
* Context hook (ChatContext) so that all components can access the state.

## Acknowledgement
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Tutorial by Le Wagon: https://github.com/lewagon/react-redux-challenges/blob/master/03-Redux-Advanced/01-Redux-Chat/README.md
