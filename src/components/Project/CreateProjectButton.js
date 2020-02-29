import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        Dodaj Projekt
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
