import React from "react";
import { Badge, Space, Button } from "antd";

const ChangeName = () => {
  const [name, setNmae] = React.useState("rizwan");
  const Change = () => {
    setNmae("Shoaib");
    if (name === "Shoaib") {
      setNmae("rizwan");
    }
  };

  return (
    <div>
      <Button
        type="default"
        size={100}
        style={{ marginTop: 40 }}
        onClick={Change}>
        Change Name
      </Button>
      <div>{name}</div>
    </div>
  );
};

export default ChangeName;
