import { useEffect } from 'react';
import { useImmer } from 'use-immer';

export function useMessages(chatroomName) {
  const [messagesData, updateMessagesData] = useImmer([]);
  const url = `https://chat.api.lewagon.com/${chatroomName}/messages`;

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          updateMessagesData(json.messages);
        }
      });
      return () => {
        ignore = true;
      };
    }
  }, [url, updateMessagesData] );

  return messagesData;
}
