import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("services")) {
      actions.handleServices();
    } else if (lowerCaseMessage.includes("projects")) {
      actions.handleProjects();
    } else if (lowerCaseMessage.includes("contact")) {
      actions.handleContact();
    } else {
      actions.handleDefault(); // Fallback for any other input
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
