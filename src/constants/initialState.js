export const initialState = {
  chatrooms: [
    {id: 0, name: 'general'},
    {id: 1, name: 'react'},
    {id: 2, name: 'paris'}
  ],
  selectedChatroomId: 0,
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};
