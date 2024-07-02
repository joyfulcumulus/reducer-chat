export const initialState = {
  chatrooms: [
    {id: 0, name: 'general'},
    {id: 1, name: 'react'},
    {id: 2, name: 'paris'}
  ],
  selectedChatroomId: 0,
  messages: [],
  currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};
