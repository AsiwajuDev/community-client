import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-3 text-center">
      <Link className="text-white mr-2" to="/">
        {" "}
        Dev Community
      </Link>
      <small>Copyright &copy; {new Date().getFullYear()}</small>
    </footer>
  );
};
