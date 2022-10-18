import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      This is Order Page
      <h4>{user?.displayName}</h4>
    </div>
  );
};

export default About;
