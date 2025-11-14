import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';

const config = {
  initialMessages: [createChatBotMessage(`Hi! How can I help you with Pro-Builder's services today?`)],
  botName: 'Pro-Builder Bot',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#0ca39a',
    },
    chatButton: {
      backgroundColor: '#0ca39a',
    },
  },
  actionProvider: ActionProvider,
};

export default config;
