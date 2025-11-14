import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";

const config = {
  initialMessages: [
    createChatBotMessage(
      "👋 Hi! I'm your Skill-Match assistant. I can help you analyze your skills, explore job roles, and build a personalized career roadmap. What would you like to do today?"
    ),
  ],
  botName: "Skill-Match Bot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#3949ab", // Updated to match Skill-Match branding
    },
    chatButton: {
      backgroundColor: "#3949ab",
    },
  },
  actionProvider: ActionProvider,
};

export default config;
