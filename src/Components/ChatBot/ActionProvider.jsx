import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // Function to handle a default response
  const handleDefault = () => {
    const message = createChatBotMessage(
      "I'm here to help! Ask me about Pro-Builder's services, projects, or contact info."
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  // Function to handle service inquiries
  const handleServices = () => {
    const message = createChatBotMessage(
      "We offer a variety of services, including construction management, project planning, and renovation services."
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  // Function to handle project inquiries
  const handleProjects = () => {
    const message = createChatBotMessage(
      "We have completed several projects, including residential buildings, commercial spaces, and infrastructure projects. You can view our portfolio for more details."
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  // Function to handle contact inquiries
  const handleContact = () => {
    const message = createChatBotMessage(
      "You can contact us via email at contact@pro-builder.com or call us at (123) 456-7890."
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleDefault,
            handleServices,
            handleProjects,
            handleContact,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
