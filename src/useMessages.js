import { useEffect } from 'react';
import { useImmer } from 'use-immer';

export function useMessages(chatroomName) {
  const [messagesData, updateMessagesData] = useImmer([]);

  useEffect(() => {
    let ignore = false;
    const intervalId = setInterval(() => {
      fetchMessages(chatroomName);
    }, 2000);

    function fetchMessages(chatroomName) {
      const url = `https://chat.api.lewagon.com/${chatroomName}/messages`;
      fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          updateMessagesData(json.messages);
        }
      });
    }

    return () => {
      ignore = true;
      clearInterval(intervalId);
    }

  }, [chatroomName, updateMessagesData] );

  return messagesData;
}
