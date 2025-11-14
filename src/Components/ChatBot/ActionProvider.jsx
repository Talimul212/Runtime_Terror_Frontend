import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // Default fallback
  const handleDefault = () => {
    const message = createChatBotMessage(
      "👋 Hi! I'm your Skill-Match assistant. I can help you explore job roles, identify skill gaps, and guide your career roadmap. Just ask!"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Services offered by Skill-Match
  const handleServices = () => {
    const message = createChatBotMessage(
      "💼 Skill-Match helps you analyze your skills, match with relevant job roles, identify missing competencies, and generate personalized career roadmaps. We also offer CV analysis and job tracking tools."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Projects or platform features
  const handleProjects = () => {
    const message = createChatBotMessage(
      "🚀 Our platform includes features like Skill Gap Analyzer, AI-generated Career Roadmaps, CV Parsing, and Job Matching. You can explore these tools in your dashboard to boost your career journey."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Contact or support
  const handleContact = () => {
    const message = createChatBotMessage(
      "📩 You can reach our support team at support@skill-match.ai or use the in-app chat for quick help. We're here to support your career growth!"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: {
            handleDefault,
            handleServices,
            handleProjects,
            handleContact,
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;
